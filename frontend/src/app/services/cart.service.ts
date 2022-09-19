import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cartProduct';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:3000/carts';

  constructor(private http: HttpClient) { }

  getCartProducts(): Observable<CartProduct[]>{
    return this.http.get<CartProduct[]>(this.apiUrl);
  }

  addCartProduct(cp: CartProduct): Observable<CartProduct> {
    return this.http.post<CartProduct>(this.apiUrl, cp);
  }

  editCartProduct(id: any, cp:CartProduct): Observable<CartProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<CartProduct>(url, cp, httpOptions);
  }

  deleteCartProduct(id: any): Observable<CartProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<CartProduct>(url);
  }

}
