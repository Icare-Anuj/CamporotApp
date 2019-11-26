import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  params;
  private filterRoute = 'https://grupo-camporota-api.herokuapp.com/api/properties';

  constructor(private http: HttpClient) { }

  filter(logNamespace): Observable<any> {

    // for (var val in logNamespace) {
    //   this.params = new HttpParams()
    //   .append(val, logNamespace[val])
    // 

    const httpOptions = {
      params: { ...logNamespace }
    };
    // return this.http.get<any>(this.filterRoute, {
    //     params: new HttpParams().set('params', params.toString())}
    return this.http.get<any>(this.filterRoute, httpOptions)
  }

  delete(id): Observable<any> {
    // const httpOptions = {
    //   params: id
    // };

    const httpOptions = {
      headers: new HttpHeaders({
        // "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${localStorage.getItem('token').replace(/"/g, '')}`
      })
    };
    return this.http.delete<any>(this.filterRoute, {
       params: new HttpParams().set('property_id', id.toString()), headers: httpOptions.headers})
    //  return this.http.delete<any>(this.filterRoute, httpOptions)
  }
}


