import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';


export class IdValidator {
  static createValidator(dataService: DataService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return dataService.checkIfIdExists(control.value)
      .pipe(
        map((result: boolean) =>
          result ? { IdAlreadyExists: true } : null
        )
      );
  };
}
}