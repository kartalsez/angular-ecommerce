import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'eagle-shelf-header',
  templateUrl: './eagle-shelf-header.component.html',
  styleUrls: ['./eagle-shelf-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EagleShelfHeaderComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: any;
  @Output() sidenavClick: EventEmitter<any> = new EventEmitter<any>();
  public sidenavOpen = true;
  public sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  public sort: any;
  public counts = [12, 24, 36];
  public count: any;
  public offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public offset: any;
  public viewType = 'grid';
  public viewCol = 25;

  constructor() {
  }

  ngOnInit(): void {
    this.count = this.counts[0];
    this.sort = this.sortings[0];
    this.offset = this.offsets[0];
    if (window.innerWidth < 960){
      this.sidenavOpen = false;
    }
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  public changeSorting(sort): void {
    this.sort = sort;
  }

  public changeOffsetLimit(offset, count, type: 'offset' | 'limit'): void {
  }

  public changeViewType(viewType, viewCol): void {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }

  public onClickSideNav(): void {
    this.sidenavClick.emit();
  }
}
