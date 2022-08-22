import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Certificate, Crew } from 'src/app/Crew';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.scss']
})
export class AddPopUpComponent implements OnInit {
  crewList : Crew[];
  constructor(private fb: FormBuilder,private service:DataService,public dialog:MatDialog) {
    this.crewList = service.crewList
  }

  crewForm  = this.fb.group({
    Id:[0],
    FirstName: [''],
    LastName: [''],
    Nationality: [''],
    Title: [''],
    DaysOnBoard: [0],
    DailyRate: [0],
    Currency: [''],
    TotalIncome: [0],
    Certificates: this.fb.array<Certificate>([]) as FormArray,
  });

 
  ngOnInit(): void {}
 
  get certificatesForms() {
    return this.crewForm.get('Certificates') as FormArray;
  }

  addCertificateFormGroup() {
    this.certificatesForms.push(
      this.fb.group({
        name: [''],
        date: ['']
      })
    );
  }
  removeCertificateFormGroup(index: number) {
    this.certificatesForms.removeAt(index);
  }

  closeDialog(){
    this.dialog.closeAll()
  }

  addCrew(){
      this.crewList.push(new Crew(this.crewForm.value.Id!,this.crewForm.value.FirstName!,this.crewForm.value.LastName!,this.crewForm.value.Nationality!,this.crewForm.value.Title!,this.crewForm.value.DaysOnBoard!,this.crewForm.value.DailyRate!,this.crewForm.value.Currency!,this.crewForm.value.TotalIncome!,this.crewForm.value.Certificates
      ))
      this.closeDialog()
    }    
  }
  

