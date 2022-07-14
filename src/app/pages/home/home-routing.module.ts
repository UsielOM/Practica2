import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfmakeComponent } from 'src/app/shared/pdfmake/pdfmake.component';
import { NominaPagesComponent } from '../nomina/nomina-pages.component';
import { CardsComponent } from './components/cards/cards.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomePagesComponent } from './home-pages.component';


const routes: Routes = [
{path:'', component:HomePagesComponent,
children:[
  {path:'cards', component:CardsComponent},
  {path: 'pdf', component:PdfmakeComponent},
  {path: 'registeruser', component:RegisterUserComponent}


]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
