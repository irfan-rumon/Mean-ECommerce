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

  editProduct( product:Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }
}
