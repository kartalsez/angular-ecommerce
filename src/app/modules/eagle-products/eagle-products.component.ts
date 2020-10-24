import {Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'eagle-products',
  templateUrl: './eagle-products.component.html',
  styleUrls: ['./eagle-products.component.scss']
})
export class EagleProductsComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: any;
  public sidenavOpen = true;
  public sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  public sort: any;
  public counts = [12, 24, 36];
  public count: any;
  public viewType = 'grid';
  public viewCol = 25;

  ngOnInit() {
    this.count = this.counts[0];
    this.sort = this.sortings[0];
    if (window.innerWidth < 960){
      this.sidenavOpen = false;
    }
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  public changeSorting(sort){
    this.sort = sort;
  }

  public changeCount(count){
    this.count = count;
  }

  public changeViewType(viewType, viewCol){
    this.viewType = viewType;
    this.viewCol = viewCol;
  }
}
