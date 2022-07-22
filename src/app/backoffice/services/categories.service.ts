import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = `${environment.apiUrl}categories`;
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]>{
    return this.http.get<any>(this.baseUrl);
  }

  add(categorie: Categorie): Observable<any> {
    return this.http.post(this.baseUrl, categorie, {withCredentials: true})
  }
  show(_id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/'+_id);
  }
  delete(_id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl+'/'+_id);
  }
  update(_id: string, categorie: Categorie): Observable<any> {
    return this.http.put<any>(this.baseUrl+'/'+_id, categorie);
  }
}
