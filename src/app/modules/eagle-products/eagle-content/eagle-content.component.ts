import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'eagle-content',
  templateUrl: './eagle-content.component.html',
  styleUrls: ['./eagle-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EagleContentComponent implements OnInit {
  @Output() sidenavClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  public onClickSideNav() {
    this.sidenavClick.emit();
  }

}
