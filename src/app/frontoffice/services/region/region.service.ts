import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class RegionService {

  constructor(private http: HttpClient) { }
  index(): Observable<any> {
    return this.http.get(API +'regions', httpOptions);
  }
}
