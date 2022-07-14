import { RegionService } from './../../../frontoffice/services/region/region.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../frontoffice/services/auth/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  regions = [];
  edited: Boolean =  false;
  constructor(private token: TokenStorageService,  private regionService: RegionService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getRegions();
    // console.log(this.currentUser)
  }
  getRegions() {
    this.regionService.index().subscribe({
      next: data => {
        this.regions = data;
      },
      error: err => {
        console.log(err)
      }
    })
  }


}
