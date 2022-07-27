import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as uuid from 'uuid';
import { FileUpload } from '../models/file-upload.model';
import { StorageService } from 'src/app/frontoffice/services/auth/token-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private basePath = `/images/${this.currentUser.getUser().username}`;
  private baseUrl = `${environment.apiUrl}produits`;
  private listImages: FileUpload[] = [];
  constructor(
    private http: HttpClient,
    private currentUser: StorageService,
    private storage: AngularFireStorage) { }
  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    //const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const fileName = uuid.v4();
    const filePath = `${this.basePath}/${fileName}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileName;

          // this.saveFileData({
          //   name: fileName,
          //   url: downloadURL
          // }).subscribe();
          this.listImages.push(fileUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }
  getTmpImages(): FileUpload[]{
    return this.listImages;
  }
  saveProduit(data: any): Observable<any> {
    return this.http.post(
      this.baseUrl,
      data,
    );
  }
  // private saveFileData(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}`, data);
  // }
  // getFiles(): Observable<any[]>{
  //   return this.http.get<any>(this.baseUrl);
  // }
  deleteImage(fileUpload: FileUpload){
    this.deleteInListImage(fileUpload.name);
    this.deleteFileStorage(fileUpload.name);
  }
  // private deleteFileDatabase(id: string): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}/${id}`);
  // }
  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
  private deleteInListImage(name: string): void {
    const index = this.listImages.findIndex((e: FileUpload)=> e.name === name);
    this.listImages.splice(index, 1);
  }

  userProduits(user: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}user/produits/${user}`);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
