import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private productUrl = 'http://localhost:8044/api/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<categoryModel[]>(this.productUrl);
  }
}
