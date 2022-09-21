import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { OrderProduct } from 'src/app/models/orderProduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  tempOrderProducts: OrderProduct[] = [];
  orderProducts: OrderProduct[] = [];
  total:number = 0;
  shipping:number = 3;
  grandTotal:number;
 

  constructor(private router:Router,
              private orderService: OrderService,
             ) { }

  ngOnInit(): void {
      this.orderService.getOrderProducts().subscribe( (orderProducts)=>{
        this.tempOrderProducts = orderProducts;
        for(let op of this.tempOrderProducts)
            if( op.userID == Number( localStorage.getItem('user-id') ))
                this.orderProducts.push(op);
        
        for(let op of this.orderProducts){
            this.total += +op.subtotal;
            this.grandTotal += +op.subtotal;
        }
      })
      this.grandTotal = this.total + this.shipping;  
  }
}
