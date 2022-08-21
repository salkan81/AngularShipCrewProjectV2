import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertPopUpComponent, HomePageComponent } from './home-page.component';
import { CrewCardPageModule } from '../crew-card-page/crew-card-page.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
];

@NgModule({
  declarations: [HomePageComponent, CertPopUpComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),CrewCardPageModule
  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
