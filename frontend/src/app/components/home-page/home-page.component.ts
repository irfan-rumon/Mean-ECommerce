import { Component, OnInit } from '@angular/core';
import { CatagoryApiService } from 'src/app/services/catagory-api.service';
import { Router } from '@angular/router';
import { Catagory } from 'src/app/models/catagory';
import { Product } from 'src/app/models/product';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  catagories: Catagory[] = [];
  products: Product[];
  trendingProducts: Product[] = []

  
  constructor(private router: Router, private catagoryApi:CatagoryApiService,
              private productApi: ProductApiService
    ) { }

  ngOnInit(): void {
    this.catagoryApi.getCatagories().subscribe(  (catagories)=>{
       this.catagories = catagories;
       console.log("heyy", catagories);
    } )
    this.productApi.getProducts().subscribe( (products)=>{
         this.products = products;
         for (let pr of this.products){
            console.log("Trending Status:",  pr.isTrending);
            console.log("Type of trending variable:", typeof pr.isTrending);
            if( pr.isTrending == true)this.trendingProducts.push( pr );
         }
         //console.log("Products:", this.products);
         console.log("Trending:", this.trendingProducts);
    } )

  }

}
