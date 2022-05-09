import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  
  private listaProductos: listaProducto [] =[
    {
      id: 1,
      name: "Bata",
      precio: 500,
      imagen: "assets/medic1.jpg"
    },
    {
      id: 2,
      name: "Bata profecional",
      precio: 1500,
      imagen: "assets/medic1.jpg"
    },
    {
      id: 3,
      name: "Macara Batman",
      precio: 2500,
      imagen: "assets/batman.png"
    }
  
  ];






  constructor() { 
    console.log("Servicio para usar !!!")
  }

  getLista():listaProducto[]{
    return this.listaProductos;
    }

    getProducto(idx:number){
    
      return this.listaProductos[idx];
      }
}


export interface listaProducto{

id: number
name: string
precio: number
imagen: string

}
