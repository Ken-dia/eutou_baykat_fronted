import { NotificationsService } from './../../services/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/frontoffice/services/auth/token-storage.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  loading: Boolean = true;
  currentUser?: any;
  notifications: any = [];
  isAdmin: Boolean = false;
  constructor(
    private notificationsService: NotificationsService,
    private router: Router,
    private storageService: StorageService

     ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.isAdmin = this.currentUser.roles.includes('ROLE_ADMIN');
    console.log(this.isAdmin);
    this.index();
  }
  index() {
    this.notificationsService.notificationAll().subscribe(data =>{
      this.notifications = data;
      this.loading =false
    }, (err)=> {
      this.loading = false;
    }
    );
  }
  viewAnnonce(notify_id: any, product_id: any) {
    this.notificationsService.isRead(notify_id).subscribe(data => console.log(data));
    const url = this.isAdmin ? 'admin' : 'user';
    this.router.navigate(['dashboard/'+ url + '/produit-detail', product_id]);
  }
  readNoty(notify_id: any) {
    this.notificationsService.isRead(notify_id).subscribe(data => this.index());
  }

}
