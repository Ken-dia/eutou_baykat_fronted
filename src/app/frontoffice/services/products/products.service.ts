import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productUrl = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.productUrl);
  }
}
