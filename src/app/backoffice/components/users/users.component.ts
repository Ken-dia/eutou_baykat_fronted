import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/frontoffice/services/auth/token-storage.service';
import { UserService } from 'src/app/frontoffice/services/user/user.service';

/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  content? : any;
  currentUser: any;
  users = [];
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
    this.userService.getUsers(this.currentUser.id).subscribe( data => this.users = data)
  }

  isActive(user: any) {
    this.userService.isActive(user._id, {value : !user.enabled}).subscribe( data => this.getUsers());
  }
  view(id: string) {
    this.router.navigate(['dashboard/admin/user-detail', id]);
  }
}
