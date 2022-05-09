import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path:'home',
loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
},


{path:'nomina',
loadChildren: () => import('./pages/nomina/nomina.module').then(m=>m.NominaModule)
},
{path: 'galeria',
loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoModule)
},


{path: '**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
