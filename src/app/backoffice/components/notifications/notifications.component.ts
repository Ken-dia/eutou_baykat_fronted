import { NotificationsService } from './../../services/notifications.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  loading: Boolean = true;
  notifications: any = [];
  constructor(private notificationsService: NotificationsService, private router: Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['dashboard/admin/produit-detail', product_id]);
  }
  readNoty(notify_id: any) {
    this.notificationsService.isRead(notify_id).subscribe(data => this.index());
  }

}
