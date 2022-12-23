import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientIncrComponent } from './patient-incr/patient-incr.component';
import { PatientComponent } from './patient/patient.component';
import { PatientfiledetailsComponent } from './patient/patientfiledetails.component';
import { PatientfileComponent } from './patientfile/patientfile.component';

const routes: Routes = [
  {
    path:'patient',
    component: PatientComponent
  },
  {
    path:'patientfiledetails/:id',
    component:PatientfiledetailsComponent
  },
  {
    path:'patientIncr', component:PatientIncrComponent
  },
  {
    path:'patientfile', component:PatientfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
