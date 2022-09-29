import { Component, OnInit } from '@angular/core';

import { ProductApiService } from 'src/app/services/product-api.service';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cartProduct';
import { OrderProduct } from 'src/app/models/orderProduct';
import { Card } from 'src/app/models/card';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  card: Card = {} as Card;
  tempCartProducts: CartProduct[] = [];
  cartProducts: CartProduct[] = [];
  total:number = 0;
  shipping:number = 3;
  grandTotal:number;
  totalAddedQuanty:number = 0;
 


  constructor(private router:Router,
              private cartService: CartService,
              private orderService: OrderService,
              private auth:  AuthorizationService,
              private productApi: ProductApiService) { }

  ngOnInit(): void {
     /* this.cartService.getCartProducts().subscribe( (cartProducts)=>{
        this.tempCartProducts = cartProducts;
        for(let cp of this.tempCartProducts){
            if( cp.userID == Number(localStorage.getItem('user-id')) )
               this.cartProducts.push(cp);
        }
        for(let cp of this.cartProducts){
            this.total += +cp.subtotal;
            this.grandTotal += +cp.subtotal;
            this.totalAddedQuanty += +cp.quantity;
        }
      } )
      this.grandTotal = this.total + this.shipping;  */
  }

  onCardSubmit(){
    console.log("Heyy");
  }

  addQuantity(cartProduct:CartProduct){
    /*this.totalAddedQuanty++;
    for(let cp  of this.cartProducts){
      if(cp.id == cartProduct.id){ 
          cp.quantity++;
          cp.subtotal = +cp.unitPrice  +  +cp.subtotal;
          this.total += +cp.unitPrice;
          this.grandTotal += +cp.unitPrice;  
          this.cartService.editCartProduct(cartProduct.id, cp).subscribe(); 
         // console.log("Akn cart", this.auth.getUser());
          return; 
      }
    }*/
  }

  minusQuantity(cartProduct:CartProduct){
    /*if( cartProduct.quantity == 1){
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
    }*/

  }

  deleteCartProduct(cartProduct:CartProduct){
    /*
      this.total -= +cartProduct.subtotal;
      this.grandTotal -= +cartProduct.subtotal;
      this.totalAddedQuanty -= +cartProduct.quantity;

      this.cartService.deleteCartProduct(cartProduct).subscribe(); //external server theke delete
      const indexOfObject = this.cartProducts.findIndex((object) => {
        return object === cartProduct;
      });  
      this.cartProducts.splice(indexOfObject, 1);//internal array theke delete*/
  }

   onCheckout(){
      //this.router.navigate(['/order-confirmation']);
      /*for(let cp of this.cartProducts){
         
            let orderProduct:OrderProduct = {
               productID: +cp.productID, 
               userID: +cp.userID,
               imageURL: cp.imageURL,
               name: cp.name,
               unitPrice : +cp.unitPrice,
               quantity: +cp.quantity,
               brand: cp.brand,
               subtotal: +cp.subtotal
            }
            this.orderService.addOrderProduct(orderProduct).subscribe(  (res)=>{

              this.cartService.deleteCartProduct(cp).subscribe(  ()=>{
                const indexOfObject = this.cartProducts.findIndex((object) => {
                  return object === cp;
                });  
                this.cartProducts.splice(indexOfObject, 1);//internal array theke delete
              } );
            });
           

      }
      this.router.navigate(['/order-confirmation']);
      */

   }
 
      


}
