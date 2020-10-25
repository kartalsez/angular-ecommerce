import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClickIconBtnType, ProductItem } from '../../../../shared/product-item/eagle-product-item.component';
import { setShoppingCart } from '../../../../store/eagle-shopping-cart.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'eagle-product-list',
  templateUrl: './eagle-product-list.component.html',
  styleUrls: ['./eagle-product-list.component.scss']
})
export class EagleProductListComponent implements OnInit, OnDestroy {
  public productItems: ProductItem[] = [
    {
      categoryName: 'Sport',
      productName: 'Sivasspor Bag',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_bag.png',
      count: 1
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Clock',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_clock.jpeg',
      count: 1
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Cup',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_cup.jpg',
      count: 1
    },
    {
      categoryName: 'Sport',
      productName: 'Sivasspor Bag',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_bag.png',
      count: 1
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Clock',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_clock.jpeg',
      count: 1
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Cup',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_cup.jpg',
      count: 1
    },
  ];

  currentShoppingCart: any;
  subscriptions: Subscription;

  constructor(private store: Store<{shoppingCart}>, private snackBar: MatSnackBar) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this._getCurrentShoppingCart();
  }

  onClickIconBtn(type: ClickIconBtnType, productItem: ProductItem): void {
    if (type === ClickIconBtnType.ADD_TO_BASKET) {
      this.store.dispatch(setShoppingCart({shoppingCart: this._createShoppingCartObj(productItem)}));
      this.snackBar.open('Product added into shopping cart successfully.', 'OK', { duration: 3000 });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _getCurrentShoppingCart(): void {
    const subs = this.store.select('shoppingCart').subscribe(res => {
      if (res?.shoppingCartObj) {
        this.currentShoppingCart =  JSON.parse(JSON.stringify(res.shoppingCartObj));
      }
    });
    this.subscriptions.add(subs);
  }

  private _createShoppingCartObj(productItem: ProductItem): any {
    if (this.currentShoppingCart) {
      if (this.currentShoppingCart.cartItems) {
        if (this.currentShoppingCart.cartItems.some(item => item.productName === productItem.productName)) {
         this.currentShoppingCart.cartItems
           .map(cartItem => cartItem.count = cartItem.productName === productItem.productName ? cartItem.count + 1 : cartItem.count);
        } else {
          this.currentShoppingCart.cartItems.push(productItem);
        }
      } else {
        this.currentShoppingCart.cartItems = [productItem];
      }
    } else {
      this.currentShoppingCart = { cartItems: [productItem] };
    }
    return this.currentShoppingCart;
  }
}
