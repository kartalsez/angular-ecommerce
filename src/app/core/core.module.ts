import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { EagleHeaderComponent } from './components/eagle-header/eagle-header.component';
import { EagleFooterComponent } from './components/eagle-footer/eagle-footer.component';

@NgModule({
  declarations: [
    EagleHeaderComponent,
    EagleFooterComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
  ],
  exports: [
    EagleHeaderComponent,
    EagleFooterComponent,
  ]
})
export class CoreModule { }
