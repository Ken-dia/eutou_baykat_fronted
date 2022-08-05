import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss'],
})
export class AdvertisingComponent implements OnInit {
  @Input() advertising: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.advertising);
  }
}
