import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cartProduct';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  products: Product[];
  cartProducts: CartProduct[];
  totalAddedQuanty:number;

  constructor(
      private router:Router,
      private searchService:SearchService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
      this.products = this.searchService.getProducts();

      this.cartService.getCartProducts().subscribe(  (cartProducts)=>{
        this.cartProducts = cartProducts;
        let totalQ: number = 0;
        for(let cp of this.cartProducts){
            totalQ += +cp.quantity;
        }
        this.totalAddedQuanty = totalQ;    
  })
     
  }

  addAddedQuantity(){
    this.totalAddedQuanty++;
  }

}
