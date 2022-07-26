import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = environment.apiUrl+'users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(id: any): Observable<any> {

    return this.http.get(API_URL + '/' +id);
  }
  isActive(id: any, value: any): Observable<any> {
    return this.http.put(API_URL + '/is-active/'+ id, value);
  }
  show(id: any): Observable<any> {
    return this.http.get(API_URL+'/show/'+id);
  }
}
