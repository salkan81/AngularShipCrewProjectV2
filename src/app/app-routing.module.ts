import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewCardPageComponent } from './home/crew-card-page/crew-card-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LayoutComponent } from './home/layout/layout.component';

const routes: Routes = [
{
path:'',
component:LayoutComponent,
children:[
  {
    path:'',
    component:HomePageComponent,
    loadChildren:()=>
    import('./home/home-page/home-page.module').then(
      (m) => m.HomePageModule
    )
  },
  {
      path: ':id', 
      component: CrewCardPageComponent,
      loadChildren:()=>
      import('./home/crew-card-page/crew-card-page.module').then(
        (m)=>m.CrewCardPageModule
      )
  },
  
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
