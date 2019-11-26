import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    // "Content-Type": "multipart/form-data",
    'Authorization': `Bearer ${localStorage.getItem('token').replace(/"/g, '')}`
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
