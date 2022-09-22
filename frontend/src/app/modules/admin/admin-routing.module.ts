import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductsComponent } from './add-products/add-products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { EditProductComponent} from './edit-product/edit-product.component';


const routes: Routes = [
   
    //canActivate: [AuthGuard],
      {path : '', component: AdminDashboardComponent},
      { path: 'products', component: AdminProductsComponent},
      { path: 'products/add', component: AddProductsComponent},
      { path: 'products/:id/edit', component: EditProductComponent},
      { path: 'orders', component: AdminOrderComponent},

];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
