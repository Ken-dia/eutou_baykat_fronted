import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private baseUrl = `${environment.apiUrl}notifications`;
  constructor(private http: HttpClient) { }
  countNotify(): Observable<any> {
    return this.http.get(this.baseUrl+'/count');
  }

  notificationAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  isRead(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'/is-read/'+id);
  }
}
