import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';
import { AdminDashboardComponent } from 'src/app/components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    {path: '', component:AddProductComponent},
   
    {path: 'products/add', component: AddProductComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
