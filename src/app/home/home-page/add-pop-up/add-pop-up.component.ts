import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.scss']
})
export class AddPopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crewForm = new FormGroup({
    id: new FormControl(),
    firstName : new FormControl(),
    lastName : new FormControl(),
    title : new FormControl(),
    nationality : new FormControl(),
    certificatesName : new FormControl(),
    certificateDate : new FormControl()
  });

  SaveCrew(){
    console.log(this.crewForm.value)
  }
  

}
