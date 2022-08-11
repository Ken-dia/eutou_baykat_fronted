import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/frontoffice/services/auth/token-storage.service';
import { UserService } from 'src/app/frontoffice/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  content? : any;
  currentUser: any;
  users = [];
  loading: Boolean = true;
  displayedColumns: string[] = ['username','nom', 'prenom','email','region', 'enabled','view'];
  dataSource = new MatTableDataSource(this.users);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private userService: UserService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(this.currentUser.id).subscribe( data => {
        this.users = data;
        this.loading = false;
      }, err => this.loading = false
    )
  }

  isActive(user: any) {
    this.userService.isActive(user._id, {value : !user.enabled}).subscribe( data => this.getUsers());
  }
  view(id: string) {
    this.router.navigate(['dashboard/admin/user-detail', id]);
  }
}
