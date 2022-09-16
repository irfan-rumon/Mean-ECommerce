import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DisplayComponent } from './components/display/display.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
     {path: '',  component:  HomePageComponent },
     {path: 'display', component: DisplayComponent},
     {path: 'cart', component: CartComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
