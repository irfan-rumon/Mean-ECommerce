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
    CheckboxServicesOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
