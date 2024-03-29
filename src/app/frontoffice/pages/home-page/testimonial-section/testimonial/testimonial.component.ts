import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial!: { img: string; author: string; text: string };

  constructor() {}

  ngOnInit(): void {}
}
