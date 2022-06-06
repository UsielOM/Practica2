import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../service/galeria.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.component.html',
  styleUrls: ['./producto2.component.css']
})

export class Producto2Component implements OnInit {
  producto: any ={};

  constructor(private activateRoute: ActivatedRoute, private _galeriaSerive: GaleriaService) {

    this.activateRoute.params.subscribe(params =>{
      this.producto = this._galeriaSerive.getProducto( params['id']);
      console.log(this.producto)
    })
   }

  ngOnInit(): void {
  }

}
