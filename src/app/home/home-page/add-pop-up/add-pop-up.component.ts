import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Certificate, Crew } from 'src/app/Crew';
import { DataService } from 'src/app/services/data.service';
import { IdValidator } from '../../Custom Validations/idValidator';


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
    Id : [1,[Validators.required,Validators.min(1)],[IdValidator.createValidator(this.service)]] ,
    FirstName: ['',[Validators.required]],
    LastName: ['',Validators.required],
    Nationality: ['',Validators.required],
    Title: ['',Validators.required],
    DaysOnBoard: [0,Validators.min(0)],
    DailyRate: [0,Validators.min(0)],
    Currency: ['',Validators.required],
    TotalIncome: [0,Validators.min(0)],
    Certificates: this.fb.array<Certificate>([]) as FormArray,
  });

  get Id(){
    return this.crewForm.get('Id');
  }
  get FirstName(){
    return this.crewForm.get('FirstName');
  }
  get LastName(){
    return this.crewForm.get('LastName');
  }
  get Nationality(){
    return this.crewForm.get('Nationality');
  }
  get Title(){
    return this.crewForm.get('Title');
  }
  get DaysOnBoard(){
    return this.crewForm.get('DaysOnBoard');
  }
  get DailyRate(){
    return this.crewForm.get('DailyRate');
  }
  get Currency(){
    return this.crewForm.get('Currency');
  }
  get TotalIncome(){
    return this.crewForm.get('TotalIncome');
  }

  ngOnInit(): void {
    
  }
 
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

  
  

