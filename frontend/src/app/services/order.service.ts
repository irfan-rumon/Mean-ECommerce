import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProduct } from '../models/orderProduct';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3030/order-products';

  constructor(private http: HttpClient) { }

  getOrderProducts(): Observable<OrderProduct[]>{
    return this.http.get<OrderProduct[]>(this.apiUrl);
  }

  addOrderProduct(cp: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cp);
  }

  editOrderProduct(id: any, cp:OrderProduct): Observable<OrderProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<OrderProduct>(url, cp, httpOptions);
  }

  deleteOrderProduct(id: any): Observable<OrderProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<OrderProduct>(url);
  }
}
