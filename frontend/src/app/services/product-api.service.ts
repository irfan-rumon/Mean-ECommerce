import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private apiUrl = 'http://localhost:3000/products';
 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }



  getProduct(ProductId: any): Observable<Product> {
    const url = `${this.apiUrl}/${ProductId}`;
    return this.http.get<Product>(url);
  }

  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, Product, httpOptions);
  }

  editProduct(ProductId: any, Product:Product): Observable<Product> {
    const url = `${this.apiUrl}/${ProductId}`;
    return this.http.put<Product>(url, Product, httpOptions);
  }

  deleteProduct(Product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${Product.id}`;
    return this.http.delete<Product>(url);
  }
}
