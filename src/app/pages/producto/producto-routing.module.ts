import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { Producto1Component } from './component/producto1/producto1.component';
import { Producto2Component } from './component/producto2/producto2.component';
import { ProductopagesComponent } from './productopages.component';

const routes: Routes = [

  {path: 'galeria', component:ProductopagesComponent,
children:[
  {path:'', component:GaleriaComponent},
  {path:'producto1', component:Producto1Component},
  {path:'producto2/:id', component:Producto2Component}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
