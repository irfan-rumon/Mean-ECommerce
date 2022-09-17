import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CatagoryItemComponent } from './components/catagory-item/catagory-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayComponent } from './components/display/display.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxServicesOptionComponent } from './components/checkbox-services-option/checkbox-services-option.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductItemComponent,
    NavbarComponent,
    SliderComponent,
    CatagoryItemComponent,
    FooterComponent,
    DisplayComponent,
    CheckboxComponent,
    CheckboxServicesOptionComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent,
    AdminProductComponent,
    AddProductComponent,
    EditProductComponent,
    AdminDashboardComponent  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
