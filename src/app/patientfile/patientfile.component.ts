import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-patientfile',
  templateUrl: './patientfile.component.html',
  styleUrls: ['./patientfile.component.css']
})
export class PatientfileComponent implements OnInit {

  patientFile:FormGroup;

  constructor(private pf:ProjserviceService) { }

  ngOnInit(): void {
    this.patientFile= new FormGroup({
      healthIssue:new FormControl(''),
      prescription: new FormControl('')
    });
  }

  OnPatientFile(){
    this.pf.OnPatientFile(this.patientFile.value).subscribe((result)=>{
      console.log(result);

    })
  }

}
