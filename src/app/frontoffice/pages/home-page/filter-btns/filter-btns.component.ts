import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-btns',
  templateUrl: './filter-btns.component.html',
  styleUrls: ['./filter-btns.component.scss'],
})
export class FilterBtnsComponent implements OnInit {
  @Input() categories!: string[];
  @Output() filterEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFilter(category: string) {
    this.filterEvent.emit(category);
  }
}
