import { Injectable } from '@angular/core';
import { Crew } from '../Crew';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  crewList:Crew[]

  constructor() {this.crewList=this.getCrewList() }

  getCrewList():Crew[]
  {
    return [
      new Crew(1,"Serkan","Alkan","Turkey","1st Captain",[{name: "Certificate1", date:"May 2017"},{name: "Certificate2", date:"May 2016"}]),
      new Crew(2,"Erkan","Alkan","Turkey","2nd Captain",[{name: "Certificate3", date:"May 2018"},{name: "Certificate4", date:"May 2019"}]),
      new Crew(3,"Atakan","Alkan","Turkey","3rd Captain",[{name: "Certificate5", date:"May 2020"},{name: "Certificate6", date:"May 2021"}])
    ]
  }

  getCrew(crewId:number){
    return this.crewList.filter(i=>i.Id==crewId)[0]
  }
  
  getCertificates(crewId:number){
    if(crewId!=0)
    {return this.crewList.filter(x=>x.Id==crewId)[0].Certificates}
    return
  }
  deleteCrew(key: number) {
    this.crewList.forEach((value,index)=>{
        if(value.Id==key) this.crewList.splice(index,1); 
    });
} 
}
