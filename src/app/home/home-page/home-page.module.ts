import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertPopUpComponent, HomePageComponent } from './home-page.component';
import { CrewCardPageModule } from '../crew-card-page/crew-card-page.module';
import { AddPopUpComponent } from './add-pop-up/add-pop-up.component';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
];

@NgModule({
  declarations: [HomePageComponent, CertPopUpComponent, AddPopUpComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes),CrewCardPageModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule,HttpClientModule,TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  exports:[HomePageComponent],
  providers:[]
})
export class HomePageModule { }
