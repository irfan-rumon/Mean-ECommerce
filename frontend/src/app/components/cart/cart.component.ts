import { Component, OnInit } from '@angular/core';

import { ProductApiService } from 'src/app/services/product-api.service';

import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cartProduct';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartProducts: CartProduct[] = [];
  total:number = 0;
  shipping:number = 3;
  grandTotal:number;
  totalAddedQuanty:number = 0;
 


  constructor(private router:Router,
              private cartService: CartService,
              private productApi: ProductApiService) { }

  ngOnInit(): void {
      this.cartService.getCartProducts().subscribe( (cartProducts)=>{
        this.cartProducts = cartProducts;
        for(let cp of this.cartProducts){
            this.total += +cp.subtotal;
            this.grandTotal += +cp.subtotal;
            this.totalAddedQuanty += +cp.quantity;
        }
      } )
      this.grandTotal = this.total + this.shipping;
     
  }

      


}
