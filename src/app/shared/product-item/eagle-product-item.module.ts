import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { MaterialModule } from '../material.module';
import { EagleProductItemComponent } from './eagle-product-item.component';

@NgModule({
  declarations: [
    EagleProductItemComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
  ],
  exports: [
    EagleProductItemComponent
  ]
})
export class EagleProductItemModule {
}
