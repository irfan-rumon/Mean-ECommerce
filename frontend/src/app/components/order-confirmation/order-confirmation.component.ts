import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  
  }

}
