import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  totalAddedQuanty:number;
  cartProducts: CartProduct[];


  constructor(private cartSercice:CartService) { }

  ngOnInit(): void {
    this.cartSercice.getCartProducts().subscribe(  (cartProducts)=>{
      this.cartProducts = cartProducts;
      let totalQ: number = 0;
      for(let cp of this.cartProducts){
          totalQ += cp.quantity;
      }
      this.totalAddedQuanty = totalQ;    
    })
  }

}
