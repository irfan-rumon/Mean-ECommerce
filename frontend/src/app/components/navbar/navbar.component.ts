import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Catagory } from 'src/app/models/catagory';
import { SearchService } from 'src/app/services/search.service';
import { ProductApiService } from 'src/app/services/product-api.service';
import { CatagoryApiService } from 'src/app/services/catagory-api.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products: Product[] = [];
  catagories: Catagory[] = [];
  inputVal: string;
  @Input() totalAddedQuantity: number;


  constructor(
      private router:Router,
      private searchService: SearchService,
      private productApi: ProductApiService,
      private catagoryApi: CatagoryApiService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
      this.productApi.getProducts().subscribe( (products)=>{
        this.products = products;
      } )
      this.catagoryApi.getCatagories().subscribe( (cats)=>{
        this.catagories = cats;
     } )
   
     
  }

  onLogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('user-id');
      this.router.navigate(['/login']);
  }


  reloadComponent() { //for reloading the current component
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/display']);
  }

  onSubmit(){
   
    let searchedProducts:Product[] = [];

     //searchItem first lettr uppercase, rest are lowercase
    let seachItem:string = this.inputVal.charAt(0).toUpperCase() + this.inputVal.slice(1).toLowerCase();
  
    //catagory wise search logic if applicable
    for(let cat of this.catagories){
        if( cat.name.includes(seachItem)){
            for(let pr of this.products){
               if(pr.catagoryID == cat.id)searchedProducts.push(pr);
            }
        }
    }

    //product name wise search logic if applicable
    for(let pr of this.products){
      if(pr.name.includes(seachItem) && !searchedProducts.includes(pr)){
        searchedProducts.push(pr);
      }
    }

    //brand name wise search logic if applicable
    for(let pr of this.products){
      if(pr.brand.includes(seachItem) && !searchedProducts.includes(pr)){
        searchedProducts.push(pr);
      }
    }


    this.searchService.setProducts(searchedProducts);
    if( this.router.url == '/display')this.reloadComponent();
    this.router.navigate(['display']);
  }

}
