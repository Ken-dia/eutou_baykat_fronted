import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniteService {
  private baseUrl = `${environment.apiUrl}unites`;
  constructor(private http: HttpClient) { }
  getUnites(): Observable<any[]>{
    return this.http.get<any>(this.baseUrl);
  }
}
