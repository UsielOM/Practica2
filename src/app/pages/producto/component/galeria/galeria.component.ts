import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { windowCount } from 'rxjs';
import { GaleriaService, listaProducto } from '../../service/galeria.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  listaProductos: listaProducto [] = [];


  constructor(private router:Router, private _galeriaService: GaleriaService) {

   }


verProducto(inde: number){
  this.router.navigate(['/galeria/producto2', inde]);


}
  ngOnInit(): void {
    this.listaProductos = this._galeriaService.getLista();

    console.log(this.listaProductos);
  }

}
