import { AbstractControl, ValidationErrors, ValidatorFn, Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit, forwardRef, Input, Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
 
@Injectable({
  providedIn: 'root',
})
export class gteValidatorService {
 
  constructor(private service: DataService) {
  }
 
  gte(id: number): ValidatorFn {
 
    return (control: AbstractControl): ValidationErrors | null => { 
      if (this.service.checkID(id)) {
        return { 'gte': true }
      }
      return null;
    }
  }
}