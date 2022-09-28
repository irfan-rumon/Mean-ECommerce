import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private apiUrl = 'http://localhost:3030/products';
 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }



  getProduct(anyId: any): Observable<any> {
    const url = `${this.apiUrl}/${anyId}`;
    return this.http.get<any>(url);
  }

  addProduct(any: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, any, httpOptions);
  }

  editProduct( any:any): Observable<any> {
    const url = `${this.apiUrl}/${any.id}`;
    return this.http.put<any>(url, any, httpOptions);
  }

  deleteProduct(any: any): Observable<any> {
    const url = `${this.apiUrl}/${any.id}`;
    return this.http.delete<any>(url);
  }
}
