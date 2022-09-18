import { Component, OnInit } from '@angular/core';
import { CatagoryApiService } from 'src/app/services/catagory-api.service';
import { Router } from '@angular/router';
import { Catagory } from 'src/app/models/catagory';
import { Product } from 'src/app/models/product';
import { ProductApiService } from 'src/app/services/product-api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  catagories: Catagory[] = [];
  products: Product[];
  trendingProducts: Product[] = [];
 
  
  constructor(private router: Router, private catagoryApi:CatagoryApiService,
              private productApi: ProductApiService,
              private searchService: SearchService
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
