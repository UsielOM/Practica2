import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class Validaciones2Service {

  constructor() { }

  validandoPassword(pas1:string, pas2:string){
  return (formGroup:FormGroup) =>{
    const pas1Control =  formGroup.controls[pas1];
    const pas2Control =  formGroup.controls[pas2];
    if(pas1Control.value ===  pas2Control.value){
      pas2Control.setErrors(null);
    }else{
      pas2Control.setErrors({noEsIgual:true})
    }
  }
  }

  
}
