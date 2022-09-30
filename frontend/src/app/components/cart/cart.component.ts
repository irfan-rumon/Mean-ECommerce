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
 
  cartProducts: any[] = [];
  total:number = 0;
  shipping:number = 3;
  grandTotal:number = 3;
  totalAddedQuanty:number = 0;
 


  constructor(private router:Router,
              private cartService: CartService,
              private orderService: OrderService,
              private auth:  AuthorizationService,
              private productApi: ProductApiService) { }

  ngOnInit(): void {

    this.cartService.getCartProducts().subscribe(  (res)=>{
         let arr:any[] = res.data;
         for(let cp of arr){
             if( cp.userID == this.auth.getUserPayload().sub){
                  this.cartProducts.push(cp);
                  this.total +=  +cp.subtotal;
                  this.grandTotal += +cp.subtotal;
             }
         }
    })

    this.cartService.getCartProducts().subscribe(  (cartProducts)=>{
      this.cartService.getCartProducts().subscribe(  (res)=>{
           this.cartProducts = res.data;
           for( let cp of this.cartProducts){
               if( cp.userID == this.auth.getUserPayload().sub){
                  this.totalAddedQuanty += cp.quantity;
               }
           }    
      })
})


  }

  onCardSubmit(){
    console.log("Heyy");
  }

  addQuantity(cartProduct:any){
    this.totalAddedQuanty++;
    for(let cp  of this.cartProducts){
      if(cp._id == cartProduct._id){ 
          cp.quantity++;
          cp.subtotal = +cp.unitPrice  +  +cp.subtotal;
          this.total += +cp.unitPrice;
          this.grandTotal += +cp.unitPrice;  
          this.cartService.editCartProduct(cartProduct._id, cp).subscribe(); 
         // console.log("Akn cart", this.auth.getUser());
          return; 
      }
    }
  }

  minusQuantity(cartProduct:any){
    if( cartProduct.quantity == 1){
        this.deleteCartProduct(cartProduct);
        return;
    }
    this.totalAddedQuanty--;
    for(let cp  of this.cartProducts){
      if(cp._id == cartProduct._id){ 
          cp.quantity--;
          cp.subtotal =  +cp.subtotal -  +cp.unitPrice;  
          this.total -= +cp.unitPrice;
          this.grandTotal -= +cp.unitPrice;
          this.cartService.editCartProduct(cartProduct._id, cp).subscribe(); 
          return; 
      }
    }

  }

  deleteCartProduct(cartProduct:any){
    
      this.total -= +cartProduct.subtotal;
      this.grandTotal -= +cartProduct.subtotal;
      this.totalAddedQuanty -= +cartProduct.quantity;

      this.cartService.deleteCartProduct(cartProduct).subscribe(); //external server theke delete
      const indexOfObject = this.cartProducts.findIndex((object) => {
        return object === cartProduct;
      });  
      this.cartProducts.splice(indexOfObject, 1);//internal array theke delete*/
  }

   onCheckout(){ //
      //this.router.navigate(['/order-confirmation']);
      console.log("On checkout e to entered");
      for(let cp of this.cartProducts){
         
            let orderProduct:any = {
               productID: cp.productID, 
               userID: this.auth.getUserPayload().sub,
               imageURL: cp.imageURL,
               name: cp.name,
               unitPrice : +cp.unitPrice,
               quantity: +cp.quantity,
               brand: cp.brand,
               subtotal: +cp.subtotal
            }

            console.log("ai porjobtooooooo", orderProduct);
            this.orderService.addOrderProduct(orderProduct).subscribe(  (res)=>{
              console.log(orderProduct);
              this.cartService.deleteCartProduct(cp).subscribe(  ()=>{
                const indexOfObject = this.cartProducts.findIndex((object) => {
                  return object === cp;
                });  
                this.cartProducts.splice(indexOfObject, 1);//internal array theke delete
              } );
            });
           

      }
      this.router.navigate(['/order-confirmation']);
      

   }
 
      


}
