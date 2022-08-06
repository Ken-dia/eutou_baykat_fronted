import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productUrl = 'http://localhost:8044/api/produits';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductModel[]>(this.productUrl);
  }

  getProductByid(id: string) {
    return this.http.get<ProductModel>(`${this.productUrl}/${id}`);
  }
}
