import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Crew } from "src/app/Crew";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crew-card-page',
  templateUrl: './crew-card-page.component.html',
  styleUrls: ['./crew-card-page.component.scss']
})
export class CrewCardPageComponent implements OnInit {
  crewId : number=0
  crew!: Crew;
  constructor(private activatedRoute:ActivatedRoute, private service:DataService) { 

  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((res:any)=>{
      this.crewId = res.id
      this.crew = this.service.getCrew(this.crewId);
    })
  }

}
