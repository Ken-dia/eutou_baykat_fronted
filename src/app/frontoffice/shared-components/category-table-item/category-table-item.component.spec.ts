import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTableItemComponent } from './category-table-item.component';

describe('CategoryTableItemComponent', () => {
  let component: CategoryTableItemComponent;
  let fixture: ComponentFixture<CategoryTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
