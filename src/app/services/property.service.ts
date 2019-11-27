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

  private createPropetyRoute = 'http://localhost:5000.com/api/properties';

  constructor(private http: HttpClient) { }

  createProperty(propertyData): Observable<any> {
    return this.http.post<any>(this.createPropetyRoute, propertyData, httpOptions)
  }  

  updateProperty(propertyData): Observable<any> {

    console.log(httpOptions)
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/form-data');
    // headers.append('Authorization', `Bearer ${localStorage.getItem('token').replace(/"/g, '')}`);
    return this.http.put<any>(this.createPropetyRoute, propertyData, httpOptions)
  }  
}