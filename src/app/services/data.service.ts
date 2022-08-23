import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Crew } from '../Crew';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  crewList:Crew[]
  summEUR:number
  summUSD:number

  constructor() {

    this.crewList = this.getCrewList() 
    this.summEUR = this.sumEUR()
    this.summUSD = this.sumUSD()

    }

  getCrewList():Crew[]
  {
    return [
      new Crew(1,"Katheryn","Winnick","Canada","1st Captain",25,200,"USD",5000,
      [{name: "Continuous Discharge Certificate", date:"May 2014"},
       {name: "Indian Database of Seafarers", date:"Aug 2015"},
       {name: "National Certificate of Compatence and endrosement", date:"Oct 2015"},
       {name: "Flag State Endorsement of Recognition", date:"Feb 2016"},
       {name: "Medical First Aid", date:"May 2016"}
      ]),
      new Crew(2,"Ahmet","Çalık","Turkey","2nd Captain",25,180,"EUR",4500,
      [{name: "Standards of Training, Certification and Watchkeeping",date: "Dec 2016"},
       {name: "Continuous Discharge Certificate",date: "Nov 2017"},
       {name: "Survival Craft and Rescue Boats",date: "Dec 2017"},
       {name: "Advanced Fire Fighting",date: "Jan 2018"},
       {name: "Medical Fitness",date: "Nov 2018"}
      ]),
      new Crew(3,"David","Beckham","England","3rd Captain",25,150,"EUR",3750,
      [{name: "Indian Database of Seafarers",date: "Apr 2018"},
       {name: "Course Completion Certificate",date: "Oct 2019"},
       {name: "Basic Safety Familiarisation",  date: "Dec 2019"},
       {name: "Advanced Fire Fighting",  date: "Jan 2020"},
       {name: "Medical Fitness",  date: "June 2020 "},
      ]),
      new Crew(4,"Kevin","Costner","USA","4th Captain",25,120,"USD",3000,
      [{  name: "Xth/XIIth mark sheet",  date: "Apr 2020"},
       {  name: "Continuous Discharge Certificate",  date: "Oct 2021"},
       {  name: "Ship Spesific Familiarisation",  date: "Apr 2021"},
       {  name: "Security Familiarisation",  date: "Oct 2021"},
       {  name: "Medical Fitness",  date: "Nov 2021 "},
      ]),
      new Crew(5,"Homer","Simpson","USA","Cooker",25,80,"USD",2000,
      [{name: "Italian Pasta Program", date:"May 2007"},
       {name: "Executive Chef Diploma", date:"Aug 2008"},
       {name: "College Certificate in Professional Butchery Techniques", date:"Oct 2009"},
       {name: "Certificate in Health Care Cook", date:"Feb 2010"},
       {name: "High-End Cuisine Certification Course", date:"May 2011"}
      ]),
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

  sumEUR(){
    
    return this.crewList.filter(x=>x.Currency=="EUR").map(item => item.TotalIncome).reduce((prev, curr) => prev + curr, 0);
  }

  sumUSD(){
     
    return this.crewList.filter(x=>x.Currency=="USD").map(item => item.TotalIncome).reduce((prev, curr) => prev + curr, 0);
  }

  getTotalIncome(id : number){
    return this.getCrewList()[id-1].TotalIncome
  }

  checkID(id:number){
  this.crewList.forEach(i=>i.Id==id)
  return true
  }

  }

  

  

  

  

  



