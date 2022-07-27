import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionLatestComponent } from './product-section-latest.component';

describe('ProductSectionLatestComponent', () => {
  let component: ProductSectionLatestComponent;
  let fixture: ComponentFixture<ProductSectionLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSectionLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
