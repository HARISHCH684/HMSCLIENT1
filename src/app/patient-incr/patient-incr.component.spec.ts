import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIncrComponent } from './patient-incr.component';

describe('PatientIncrComponent', () => {
  let component: PatientIncrComponent;
  let fixture: ComponentFixture<PatientIncrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientIncrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientIncrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
