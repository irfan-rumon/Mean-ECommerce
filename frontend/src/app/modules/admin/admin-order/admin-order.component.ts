import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderApiService } from 'src/app/services/order-api.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  orders: Order[];
  constructor(private router:Router, private orderApi:OrderApiService) { }

  ngOnInit(): void {
    this.orderApi.getOrders().subscribe( (orders)=>{
     this.orders = orders;
    })
  }

  onDelete(order:Order){

      this.orderApi.deleteOrder(order).subscribe(  () => (this.orders = this.orders.filter((o) => order.id !== o.id)) );//internal array thekei delete
    }
  }

