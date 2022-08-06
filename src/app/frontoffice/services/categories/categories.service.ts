import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { categoryModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private productUrl = `${environment.apiUrl}categories`;

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<categoryModel[]>(this.productUrl);
  }
}
