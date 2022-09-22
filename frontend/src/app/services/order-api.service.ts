import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  private apiUrl = 'http://localhost:3000/orders';
 

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }



  getOrder(OrderId: any): Observable<Order> {
    const url = `${this.apiUrl}/${OrderId}`;
    return this.http.get<Order>(url);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order, httpOptions);
  }

  editOrder( order:Order): Observable<Order> {
    const url = `${this.apiUrl}/${order.id}`;
    return this.http.put<Order>(url, order, httpOptions);
  }

  deleteOrder(order: Order): Observable<Order> {
    const url = `${this.apiUrl}/${order.id}`;
    return this.http.delete<Order>(url);
  }
}
