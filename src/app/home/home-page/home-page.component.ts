import { Component, OnInit } from "@angular/core";
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Crew } from "src/app/Crew";
import { DataService } from "src/app/services/data.service";
import { AddPopUpComponent } from "./add-pop-up/add-pop-up.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  crewList : Crew[];
  crew! : Crew;
  sumEUR : number = 0
  sumUSD : number = 0

  constructor(public dialog:MatDialog,private service:DataService) {
    this.crewList = service.crewList   
  }

  openDialog(crewId: number) {
    this.dialog.open(CertPopUpComponent,{data: {id: crewId}});
  }

  AddCrewDialog(Crew: Crew) {
    this.dialog.open(AddPopUpComponent,{data: {Crew: Crew}});
  }

  deleteCrew(key: number){
    console.log("sad",this.service.sumEUR())
    return this.service.deleteCrew(key)
    
  }
  sumEURR(){
    return this.service.sumEUR()
  }
  sumUSDD(){
    return this.service.sumUSD()
  }

  ngOnInit(): void {
  }
 

  onCreate(){
  this.dialog.open(AddPopUpComponent);
  }

}
@Component({
  selector: 'app-cert-pop-up',
  templateUrl: './cert-pop-up.component.html',
})
export class CertPopUpComponent implements OnInit {
  
  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {
    
  }

  closeDialog(){
    this.dialog.closeAll()
  }

}


