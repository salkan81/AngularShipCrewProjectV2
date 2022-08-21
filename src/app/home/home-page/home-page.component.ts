import { Component, OnInit } from "@angular/core";
import { MatDialog} from '@angular/material/dialog';
import { Crew } from "src/app/Crew";
import { DataService } from "src/app/services/data.service";


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  crewList:Crew[];

  constructor(public dialog:MatDialog,private service:DataService) {
    this.crewList=service.crewList
  }

  openDialog(crewId: number) {
    this.dialog.open(CertPopUpComponent,{data: {id: crewId}});
  }

  deleteCrew(key: number){
    return this.service.deleteCrew(key)
  }

  ngOnInit(): void {
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


