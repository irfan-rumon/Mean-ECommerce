import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cartProduct';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  @Output() onAddCart: EventEmitter<Product> = new EventEmitter();

  cartProducts: CartProduct[];


  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
     this.cartService.getCartProducts().subscribe( (cartProducts)=>{
         this.cartProducts = cartProducts;
     })
  }

  onAddToCart(product: Product){
      this.onAddCart.emit(product); //parent componentke inform kora

      for(let cp  of this.cartProducts){
        if(cp.productID == product.id && cp.userID == Number(localStorage.getItem('user-id'))){ //already exist,
            cp.quantity++;
            cp.subtotal = +cp.unitPrice  + +cp.subtotal;  
            this.cartService.editCartProduct(cp.id, cp).subscribe(); 
            return; 
        }
      }
      let newCartProduct = {} as CartProduct;
     
      newCartProduct.userID = Number(localStorage.getItem('user-id')); newCartProduct.brand=product.brand;
      newCartProduct.name=product.name;  newCartProduct.imageURL=product.imageURL;
      newCartProduct.unitPrice=product.unitPrice; newCartProduct.quantity=1;
      newCartProduct.subtotal=product.unitPrice;
      newCartProduct.productID = Number(product.id);

      this.cartService.addCartProduct( newCartProduct  ).subscribe();
      this.cartProducts.push(newCartProduct);
  }

  
}
