import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTableSectionComponent } from './category-table-section.component';

describe('CategoryTableSectionComponent', () => {
  let component: CategoryTableSectionComponent;
  let fixture: ComponentFixture<CategoryTableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTableSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
