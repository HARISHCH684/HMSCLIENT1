import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {
  url='http://35.85.30.164:8081/PatientIncrement';
  url1='http://35.85.30.164:8081/PatientFileInfo';

  constructor(public http:HttpClient) { }

  getPatientdetails(){
    return this.http.get<any>("http://35.85.30.164:8081/getPatient");
  
    }

   
    getPatientFileInfo(patientFileId:number){
      return this.http.get<any>("http://35.85.30.164:8081/patientInfo");
    }

    getPatientFileInfo1(){
      return this.http.get<any>("http://35.85.30.164:8081/patientInfo");
    }

    getPatientDetails(){
      return this.http.get<any>("http://35.85.30.164:8081/patientDetails");
    }

    SavePatientData(data:any){

      console.log(data);

      return this.http.post(this.url,data);

    }
    OnPatientFile(data:any){

      console.log(data);
      return this.http.post(this.url1,data);

    }
}
