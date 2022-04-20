import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { NominaPagesComponent } from './nomina-pages.component';
import { NavbarNominaComponent } from './components/navbar-nomina/navbar-nomina.component';
import { TablasComponent } from './components/tablas/tablas.component';


@NgModule({
  declarations: [
    NominaPagesComponent,
    NavbarNominaComponent,
    TablasComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
