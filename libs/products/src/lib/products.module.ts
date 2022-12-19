import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './containers/products/products.component';
import { RouterModule, Route } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
