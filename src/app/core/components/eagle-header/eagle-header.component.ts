import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCartItem, fetchShoppingCart } from '../../../store/eagle-shopping-cart.actions';
import { Subscription } from 'rxjs';
import { ProductItem } from '../../../shared/product-item/eagle-product-item.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'eagle-header',
  templateUrl: './eagle-header.component.html',
  styleUrls: ['./eagle-header.component.scss']
})
export class EagleHeaderComponent implements OnInit, OnDestroy {
  cartItemData: any = {
    totalCount: 0,
    totalPrice: 0.0,
    cartItems: []
  };
  isMobile = false;
  subscriptions: Subscription;

  constructor(private store: Store<{shoppingCart}>, private snackBar: MatSnackBar) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    if (window.innerWidth < 600){
      this.isMobile = true;
    }

    this.store.dispatch(fetchShoppingCart({customerId: '5858'}));
    const subs = this.store.select('shoppingCart')
      .subscribe(res => this._setCartItemData(res?.shoppingCartObj?.cartItems || []));
    this.subscriptions.add(subs);
  }

  public stopClickPropagate(event: any): void {
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.isMobile = true : this.isMobile = false;
  }

  public onRemoveCartItem(event, i: number): void {
    this.stopClickPropagate(event);
    this.store.dispatch(deleteCartItem({index: i}));
    this.snackBar.open('Product removed from shopping cart successfully.', 'OK', { duration: 3000 });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _setCartItemData(cartItems: ProductItem[]): void {
    this.cartItemData.cartItems = cartItems;
    this.cartItemData.totalCount = cartItems.length > 0 ? cartItems.map(_ => _.count).reduce((total, _) => total + _) : 0;
    this.cartItemData.totalPrice = cartItems.length > 0 ? cartItems.map(_ => _.count * _.oldPrice).reduce((total, _) => total + _) : 0;
  }
}

