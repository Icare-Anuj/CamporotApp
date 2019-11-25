import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
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
      params: { ...logNamespace}
  };
    // return this.http.get<any>(this.filterRoute, {
    //     params: new HttpParams().set('params', params.toString())}
    return this.http.get<any>(this.filterRoute, httpOptions)
}}
