import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss'],
})
export class TestimonialSectionComponent implements OnInit {
  testimonials = [
    {
      img: 'roland.jpeg',
      author: 'Roland Faye',
      text: ' "Eutoubaykat me permet de trouver quotidiennement des légumes de qualités pour mes différents restaurants."',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
