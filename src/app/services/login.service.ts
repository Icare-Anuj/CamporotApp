import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginRoute = 'http://localhost:5000/api/login';
  private logoutRoute = 'http://localhost:5000/api/logout';

  constructor(private http: HttpClient) { }

  login(loginQuery): Observable<any> {
    console.log(loginQuery)
    return this.http.post<any>(this.loginRoute, loginQuery, httpOptions)
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token') ? localStorage.getItem('token').replace(/"/g, '') : ''
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.delete<any>(this.logoutRoute, httpOptions);
  }

  
}
