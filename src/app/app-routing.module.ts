import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./modules/eagle-products/eagle-products.module').then(m => m.EagleProductsModule) },
  { path: '', loadChildren: () => import('./app.module').then(m => m.AppModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
