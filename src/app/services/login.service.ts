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

  private loginRoute = 'https://grupo-camporota-api.herokuapp.com/api/login';

  constructor(private http: HttpClient) { }

  login(loginQuery): Observable<any> {
    console.log(loginQuery)
    return this.http.post<any>(this.loginRoute, loginQuery, httpOptions)
  }

  
}
