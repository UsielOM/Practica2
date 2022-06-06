import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { Producto1Component } from './component/producto1/producto1.component';
import { Producto2Component } from './component/producto2/producto2.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { ProductopagesComponent } from './productopages.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [

  {path: 'galeria', component:ProductopagesComponent,
children:[
  {path:'', component:GaleriaComponent},
  {path:'producto1', component:Producto1Component},
  {path:'producto2/:id', component:Producto2Component},
  {path: 'formulario', component:RegistrarComponent},
  {path: 'form',component:FormComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
