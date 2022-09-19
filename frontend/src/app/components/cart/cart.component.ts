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
 


  constructor(private router:Router,
              private cartService: CartService,
              private productApi: ProductApiService) { }

  ngOnInit(): void {
      
     
  
  }

      


}
