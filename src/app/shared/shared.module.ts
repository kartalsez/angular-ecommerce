import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
  ]
})
export class SharedModule { }
