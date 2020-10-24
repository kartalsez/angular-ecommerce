import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CdkTreeModule } from '@angular/cdk/tree';
import { EagleProductsComponent } from './eagle-products.component';
import { EagleContentComponent } from './eagle-content/eagle-content.component';
import { EagleSidebarComponent } from './eagle-sidebar/eagle-sidebar.component';
import { EagleProductListComponent } from './eagle-content/eagle-product-list/eagle-product-list.component';
import { EagleCategoriesComponent } from './eagle-sidebar/eagle-categories/eagle-categories.component';
import { EagleShelfHeaderComponent } from './eagle-content/eagle-shelf-header/eagle-shelf-header.component';
import { EagleProductItemModule } from '../../shared/product-item/eagle-product-item.module';

export const routes = [
  { path: '', component: EagleProductsComponent, pathMatch: 'full' },
  { path: ':name', component: EagleProductsComponent },
  { path: ':id/:name', component: EagleProductsComponent }
];

@NgModule({
  declarations: [
    EagleProductsComponent,
    EagleContentComponent,
    EagleSidebarComponent,
    EagleProductListComponent,
    EagleCategoriesComponent,
    EagleShelfHeaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
    MatTreeModule,
    MatProgressBarModule,
    CdkTreeModule,
    EagleProductItemModule,
  ],
  exports: [
  ]
})
export class EagleProductsModule { }
