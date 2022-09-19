import { Component, OnInit } from '@angular/core';
import { CatagoryApiService } from 'src/app/services/catagory-api.service';
import { Router } from '@angular/router';
import { Catagory } from 'src/app/models/catagory';
import { Product } from 'src/app/models/product';
import { ProductApiService } from 'src/app/services/product-api.service';
import { SearchService } from 'src/app/services/search.service';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/cartProduct';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  catagories: Catagory[] = [];
  products: Product[];
  trendingProducts: Product[] = [];
  totalAddedQuanty:number;
  cartProducts:CartProduct[];
 
  
  constructor(private router: Router, private catagoryApi:CatagoryApiService,
              private productApi: ProductApiService,
              private searchService: SearchService,
              private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.catagoryApi.getCatagories().subscribe(  (catagories)=>{
       this.catagories = catagories;
    } )
    this.productApi.getProducts().subscribe( (products)=>{
         this.products = products;
         for (let pr of this.products){
            if( pr.isTrending == true)this.trendingProducts.push( pr );
         }
    } )
    this.cartService.getCartProducts().subscribe(  (cartProducts)=>{
          this.cartProducts = cartProducts;
          let totalQ: number = 0;
          for(let cp of this.cartProducts){
              totalQ += cp.quantity;
          }
          this.totalAddedQuanty = totalQ;    
    })

  
  }


  addAddedQuantity(){
    this.totalAddedQuanty++;
  }

  onCatClick(catID: number){
    let  searchedProducts: Product[] = [];
    for (let pr of this.products){
       if( pr.catagoryID == catID){
          searchedProducts.push(pr);
       }
    }
    this.searchService.setProducts(searchedProducts);
    console.log( this.searchService.getProducts()  );
    this.router.navigate(['/display']);
  }

}
