import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productUrl = 'http://localhost:8044/api/produits';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.productUrl);
  }
}
