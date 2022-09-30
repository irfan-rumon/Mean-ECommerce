import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { OrderProduct } from 'src/app/models/orderProduct';
import { Order } from 'src/app/models/order';
import { OrderApiService } from 'src/app/services/order-api.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderProducts: any[] = [];
  shipping:number = 3;
  total: number = 0;
  grandTotal:number = 3;
  totalAddedQuanty:number = 0;
  cartProducts: any[] = [];
 

  constructor(private router:Router,
              private orderService: OrderService,
              private cartService: CartService, 
              private adminOrderApi: OrderApiService,
              private auth: AuthorizationService
             ) { }

  ngOnInit(): void {
    this.orderService.getOrderProducts().subscribe(    (res)=>{
        for(let op of res.data){
           if( op.userID == this.auth.getUserPayload().sub ){
               this.orderProducts.push( op );
               this.total += op.subtotal;
               this.grandTotal += op.subtotal;
           }
        }
    })


      this.cartService.getCartProducts().subscribe(  (res)=>{
           this.cartProducts = res.data;
           for( let cp of this.cartProducts){
               if( cp.userID == this.auth.getUserPayload().sub){
                  this.totalAddedQuanty += cp.quantity;
               }
           }    
      })
    }
}
     

