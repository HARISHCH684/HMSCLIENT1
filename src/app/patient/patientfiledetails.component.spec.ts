import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientfiledetailsComponent } from './patientfiledetails.component';

describe('PatientfiledetailsComponent', () => {
  let component: PatientfiledetailsComponent;
  let fixture: ComponentFixture<PatientfiledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientfiledetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientfiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
