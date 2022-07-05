import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionLocalityComponent } from './product-section-locality.component';

describe('ProductSectionLocalityComponent', () => {
  let component: ProductSectionLocalityComponent;
  let fixture: ComponentFixture<ProductSectionLocalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionLocalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSectionLocalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
