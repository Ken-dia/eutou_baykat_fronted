import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuIcon: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.router.navigate(['login']);
  }

  toggle() {
    this.menuIcon = !this.menuIcon;
  }
}
