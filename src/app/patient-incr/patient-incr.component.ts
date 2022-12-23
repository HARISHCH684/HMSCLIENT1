import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-patient-incr',
  templateUrl: './patient-incr.component.html',
  styleUrls: ['./patient-incr.component.css']
})
export class PatientIncrComponent implements OnInit {





  patientIncr:FormGroup;
  patientFile:FormGroup;

  constructor( private patient:ProjserviceService) { }

  

  ngOnInit(): void {
    this.patientIncr=new FormGroup( {
      patientName: new FormControl(''),
      age: new FormControl(''),
      phoneNo: new FormControl('')
     } );
  }

  OnSubmit(){
   this.patient.SavePatientData(this.patientIncr.value).subscribe((result)=>{
      console.log(result);
      this.patientIncr.reset({});

    
    
    });


}
}