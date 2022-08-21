import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewCardPageComponent } from './crew-card-page.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../home-page/home-page.module';


@NgModule({
  declarations: [CrewCardPageComponent,CertificatesComponent],
  imports: [
    CommonModule,HttpClientModule,TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  exports:[CrewCardPageComponent,CertificatesComponent],

})
export class CrewCardPageModule { }
