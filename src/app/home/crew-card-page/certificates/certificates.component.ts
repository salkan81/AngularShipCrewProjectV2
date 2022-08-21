import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Certificate, Crew } from 'src/app/Crew';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  
  crewId : number = 0
  certificates : Certificate[] | undefined 
  
  constructor(private activatedRoute:ActivatedRoute,private service: DataService, @Inject(MAT_DIALOG_DATA) data: { id : number}) { 
    
    if(data.id){
      this.crewId = data.id
    }
  } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>{
      if(res.id){this.crewId=res.id}
    })  
    this.certificates= this.service.getCertificates(this.crewId)
  }
  
}
