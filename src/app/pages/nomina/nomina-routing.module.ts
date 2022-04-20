import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfmakeComponent } from 'src/app/shared/pdfmake/pdfmake.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { NominaPagesComponent } from './nomina-pages.component';

const routes: Routes = [
{path:'', component:NominaPagesComponent,

children:[
  {path:'tablas', component:TablasComponent},
  {path:'pdfn', component:PdfmakeComponent}

]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
