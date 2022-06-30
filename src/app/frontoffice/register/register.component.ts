import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    nom: null,
    prenom:null,
    telephone: null,
    region: null,
    email: null,
    password: null,
    password_confirm:null,
    roles:  ["vendeur","acheteur"]
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  noResult = false;
  regions? : any;
  selected?: string;
  constructor(private authService: AuthService, private regionService: RegionService) { }

  ngOnInit(): void {
    this.getRegions();
    console.log(this.regions);
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
  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }
  onSubmit(): void {

    const { username, email, password , nom, prenom, region, telephone, roles } = this.form;
    this.authService.register(username, email, password, nom, prenom,telephone, region, roles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
