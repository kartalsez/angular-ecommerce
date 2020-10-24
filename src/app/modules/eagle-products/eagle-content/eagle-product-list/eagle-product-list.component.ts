import { Component } from '@angular/core';
import { ClickIconBtnType, ProductItem } from '../../../../shared/product-item/eagle-product-item.component';

@Component({
  selector: 'eagle-product-list',
  templateUrl: './eagle-product-list.component.html',
  styleUrls: ['./eagle-product-list.component.scss']
})
export class EagleProductListComponent {
  public productItems: ProductItem[] = [
    {
      categoryName: 'Sport',
      productName: 'Sivasspor Bag',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_bag.png'
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Clock',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_clock.jpeg'
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Cup',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_cup.jpg'
    },
    {
      categoryName: 'Sport',
      productName: 'Sivasspor Bag',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_bag.png'
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Clock',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_clock.jpeg'
    },
    {
      categoryName: 'Accessory',
      productName: 'Sivasspor Cup',
      discount: 58,
      oldPrice: 80.5858,
      newPrice: 32.5858,
      imgUrl: 'assets/images/medium/ss_cup.jpg'
    },
  ];

  onClickIconBtn(type: ClickIconBtnType): void {

  }
}
