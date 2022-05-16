import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { Producto1Component } from './component/producto1/producto1.component';
import { Producto2Component } from './component/producto2/producto2.component';
import { ProductopagesComponent } from './productopages.component';
import { GaleriaService } from './service/galeria.service';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { NavbarGaleriaComponent } from './component/navbar-galeria/navbar-galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GaleriaComponent,
    Producto1Component,
    Producto2Component,
    ProductopagesComponent,
    RegistrarComponent,
    NavbarGaleriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductoRoutingModule
  ],
  providers:[
  GaleriaService
  ]
})
export class ProductoModule { }
