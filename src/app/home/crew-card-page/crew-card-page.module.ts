import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewCardPageComponent } from './crew-card-page.component';
import { CertificatesComponent } from './certificates/certificates.component';


@NgModule({
  declarations: [CrewCardPageComponent,CertificatesComponent],
  imports: [
    CommonModule
  ],
  exports:[CrewCardPageComponent,CertificatesComponent],

})
export class CrewCardPageModule { }
