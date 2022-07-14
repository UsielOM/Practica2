import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prueba } from '../../interface/prueba';
import { RegistarPruebaService } from '../../service/registar-prueba.service';
import { Validaciones2Service } from '../../service/validaciones2.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  prueb: Prueba = new Prueba();
  // listaProductos: listaProducto [] = [];

  form2:any;
  emailInvalid(){
    return this.form2.get('email2').invalid && this.form2.get('email2').touched
  }

  passwordInvalid(){
    return this.form2.get('password2').invalid && this.form2.get('password2').touched
  }

  get confrimacionInvalid(){
   const pas1 = this.form2.get('password2').value;
   const pas2 = this.form2.get('validar').value;

   return (pas1 === pas2) ? false:true
  }




  constructor(private fb:FormBuilder, private _validaciones2:Validaciones2Service, private _pruebaService:RegistarPruebaService) {
    this.formM();
   }

  ngOnInit(): void {
  }
//void funcion vacia 
  registarPrueba(): void {
this._pruebaService.createRprueba(this.prueb).subscribe(result =>{
  this.prueb = result;
});

   
  }

  formM(){
this.form2 = this.fb.group({
  email2: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  password2: ['', Validators.required],
  name2: ['',Validators.required],
  validar: ['', Validators.required]
},{
  validators: this._validaciones2.validandoPassword('password2','validar')
})
  }
  
  save(){
   var bandera = 0
    console.log(this.form2);
    if(this.form2.invalid){
      
      return Object.values(this.form2.controls).forEach(control =>{
        this.form2.markAllAsTouched();
        
      })
    }else {
      bandera=1;
    }

    if(bandera == 1){
      this.registarPrueba();
      bandera=0;
    }
 
  }



  // formulario(){
  //   this.form= this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //     phone: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmacion: ['', Validators.required],
  //     direccion: this.fb.group({
  //       distrito: ['', Validators.required],
  //       ciudad: ['', Validators.required],
  //     })
  //   },{
  //     validators: this._validadores.passwordsonIguales('password', 'confirmacion')
  //   });
  // }

}
