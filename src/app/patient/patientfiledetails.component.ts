import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { patientFile } from 'src/patientfile';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-patientfiledetails',
  templateUrl: './patientfiledetails.component.html',
  styleUrls: ['./patientfiledetails.component.css']
})
export class PatientfiledetailsComponent implements OnInit {
  id:number;
  pf1:patientFile;

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,public service:ProjserviceService) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=idparam?+idparam:0;
    this.service.getPatientFileInfo(this.id).subscribe(
      data=>{
        this.pf1=data;
      });
  }

}
