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

  addQuantity(cartProduct:CartProduct){
    this.totalAddedQuanty++;
    for(let cp  of this.cartProducts){
      if(cp.id == cartProduct.id){ 
          cp.quantity++;
          cp.subtotal = +cp.unitPrice  +  +cp.subtotal;
          this.total += +cp.unitPrice;
          this.grandTotal += +cp.unitPrice;  
          this.cartService.editCartProduct(cartProduct.id, cp).subscribe(); 
          return; 
      }
    }
  }

  minusQuantity(cartProduct:CartProduct){
    if( cartProduct.quantity == 1){
        this.deleteCartProduct(cartProduct);
        return;
    }
    this.totalAddedQuanty--;
    for(let cp  of this.cartProducts){
      if(cp.id == cartProduct.id){ 
          cp.quantity--;
          cp.subtotal =  +cp.subtotal -  +cp.unitPrice;  
          this.total -= +cp.unitPrice;
          this.grandTotal -= +cp.unitPrice;
          this.cartService.editCartProduct(cartProduct.id, cp).subscribe(); 
          return; 
      }
    }

  }

  deleteCartProduct(cartProduct:CartProduct){
      this.total -= +cartProduct.subtotal;
      this.grandTotal -= +cartProduct.subtotal;
      this.totalAddedQuanty -= +cartProduct.quantity;

      this.cartService.deleteCartProduct(cartProduct.id).subscribe(); //external server theke delete
      const indexOfObject = this.cartProducts.findIndex((object) => {
        return object === cartProduct;
      });  
      this.cartProducts.splice(indexOfObject, 1);//internal array theke delete
  }
 
      


}
