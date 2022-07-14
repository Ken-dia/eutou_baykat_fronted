import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = `${environment.apiUrl}categories`;
  constructor(private http: HttpClient) { }
  getCategories(): Observable<any[]>{
    return this.http.get<any>(this.baseUrl);
  }
}
