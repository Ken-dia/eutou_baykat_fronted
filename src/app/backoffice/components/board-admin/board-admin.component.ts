import { UserService } from '../../../frontoffice/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

}
