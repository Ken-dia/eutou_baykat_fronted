import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss'],
})
export class TestimonialSectionComponent implements OnInit {
  testimonials = [
    {
      img: 'testimonial.jpg',
      author: 'Roland Faye',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aperiam commodi excepturi nisi officia aliquam facilis ut sunt nesciunt aut quasi, quos sed ipsa voluptas magnam nobis dicta eum odio!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
