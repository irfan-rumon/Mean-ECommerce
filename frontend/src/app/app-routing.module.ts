import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DisplayComponent } from './components/display/display.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
     {path: '',  component:  HomePageComponent },
     {path: 'display', component: DisplayComponent},
     {path: 'cart', component: CartComponent},
     {path: 'login', component: LoginComponent},
     {path: 'register', component: RegisterComponent},
     {path: 'order-confirmation', component: OrderConfirmationComponent},
     { path: 'myorder', component: OrderComponent},
     {
      path: 'admin',  loadChildren: () => import('./modules/admin/admin.module').then( (m)=>m.AdminModule) 
    },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
