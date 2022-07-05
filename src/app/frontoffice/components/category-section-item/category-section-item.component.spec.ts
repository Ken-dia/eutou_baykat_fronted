import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySectionItemComponent } from './category-section-item.component';

describe('CategorySectionItemComponent', () => {
  let component: CategorySectionItemComponent;
  let fixture: ComponentFixture<CategorySectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
