import { UserService } from 'src/app/frontoffice/services/user/user.service';
import { RegionService } from './../../../frontoffice/services/region/region.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../frontoffice/services/auth/token-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  regions = [];
  edited: Boolean =  false;
  formGroup!: FormGroup;
  constructor(private token: StorageService,  private regionService: RegionService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getRegions();
    this.formGroup = this.fb.group({
      nom: [this.currentUser.nom,Validators.required ] ,
      prenom: [this.currentUser.prenom,Validators.required ] ,
      telephone: [this.currentUser.telephone,Validators.required ] ,
      email: [this.currentUser.email,Validators.required ] ,
      username: [this.currentUser.username,Validators.required ] ,
      region: [this.currentUser.region,Validators.required ] ,
    })
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
  onSubmit(value: any) {
    const data = {
      "username": value.username,
      "nom": value.nom,
      "prenom": value.prenom,
      "email": value.email,
      "telephone": value.telephone,
      "region": value.region,
      "id": this.currentUser.id
    }
    this.userService.update(this.currentUser.id, data).subscribe(res => {
      const user = {...data,id : this.currentUser.id, roles :this.currentUser.roles }
      this.token.saveUser(user);
      this.currentUser = this.token.getUser();
      this.edited = false;
    })

  }


}
