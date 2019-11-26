import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const token = localStorage.getItem('token') ? localStorage.getItem('token').replace(/"/g, '') : ''
const httpOptions = {
  headers: new HttpHeaders({
    // "Content-Type": "multipart/form-data",
    'Authorization': `Bearer ${token}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private createPropetyRoute = 'https://grupo-camporota-api.herokuapp.com/api/properties';

  constructor(private http: HttpClient) { }

  createProperty(propertyData): Observable<any> {
    return this.http.post<any>(this.createPropetyRoute, propertyData, httpOptions)
  }  
}
