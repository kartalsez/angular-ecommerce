import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'eagle-header',
  templateUrl: './eagle-header.component.html',
  styleUrls: ['./eagle-header.component.scss']
})
export class EagleHeaderComponent implements OnInit {
  cartItemData: ShoppingCartItemData = {
    totalCount: 4,
    totalPrice: 108.8,
    cartItems: [
      { name: 'Sivasspor Bag', count: 1, price: 58.8, imageUrl: 'assets/ss_bag.png' },
      { name: 'Sivasspor Clock', count: 2, price: 20.0, imageUrl: 'assets/ss_clock.jpg' },
      { name: 'Sivasspor Cup', count: 1, price: 30.0, imageUrl: 'assets/ss_cup.jpg' },
    ]
  };
  isMobile = false;

  ngOnInit(): void {
    if (window.innerWidth < 600){
      this.isMobile = true;
    }
  }

  public stopClickPropagate(event: any): void {
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.isMobile = true : this.isMobile = false;
  }
}

interface ShoppingCartItem {
  name: string;
  count: number;
  price: number;
  imageUrl: string;
}

interface ShoppingCartItemData {
  totalCount: number;
  totalPrice: number;
  cartItems: ShoppingCartItem[];
}
