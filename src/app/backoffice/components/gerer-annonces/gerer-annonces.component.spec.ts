import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAnnoncesComponent } from './gerer-annonces.component';

describe('GererAnnoncesComponent', () => {
  let component: GererAnnoncesComponent;
  let fixture: ComponentFixture<GererAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
