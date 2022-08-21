import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path:'',
    component:LayoutComponent
  }
]

@NgModule({
  declarations: [
    LayoutComponent,NavbarComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
