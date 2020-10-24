import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'eagle-product-item',
  templateUrl: './eagle-product-item.component.html',
  styleUrls: ['./eagle-product-item.component.scss']
})
export class EagleProductItemComponent {
  @Input() productItem: ProductItem;
  @Output() clickIconBtn: EventEmitter<ClickIconBtnType> = new EventEmitter<ClickIconBtnType>();
  public clickIconBtnType = ClickIconBtnType;

  public onClickIconBtn(type: ClickIconBtnType): void {
    this.clickIconBtn.emit(type);
  }
}

export interface ProductItem {
  categoryName: string;
  productName: string;
  discount: number;
  oldPrice: number;
  newPrice: number;
  imgUrl: string;
}

export enum ClickIconBtnType {
  ADD_TO_BASKET = 'add',
  VIEW_ON_BASKET = 'view'
}
