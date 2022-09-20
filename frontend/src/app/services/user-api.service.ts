import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private apiUrl = 'http://localhost:3000/users';
 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }



  getUser(userId: any): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  editUser(userId: any, user:User): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<User>(url, user, httpOptions);
  }

  deleteUser(userId: User): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<User>(url);
  }
}
