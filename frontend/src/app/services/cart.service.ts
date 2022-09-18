import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CartMapper } from '../models/cartMapper';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartMapper: CartMapper[] = [];

  constructor() { }

  addQuantity(productID:number){
    for(let cartMp of this.cartMapper){
        if(cartMp.productID == productID){
          cartMp.productQuantity++;
          return;
        }
    }
    let cartMpElement:CartMapper = {} as CartMapper;
    cartMpElement.productID = productID;
    cartMpElement.productQuantity = 1;
    this.cartMapper.push( cartMpElement )  ;
  }

  getTotalQuantity(){
    let totalQuantity = 0;
    for(let cartMp of this.cartMapper)
       totalQuantity += cartMp.productQuantity;
    return totalQuantity;   
  }

  removeQuantity(productID:number){
    for(let cartMp of this.cartMapper){
      if(cartMp.productID == productID){
        if( cartMp.productQuantity == 1)
           this.removeCartProduct(cartMp.productID);
        cartMp.productQuantity--;
        return;
      }
    }
   
  }

  removeCartProduct(productID:number){
    const indexOfObject = this.cartMapper.findIndex((object) => {
      return object.productID === productID;
    });

    this.cartMapper.splice(indexOfObject, 1);
  }

}
