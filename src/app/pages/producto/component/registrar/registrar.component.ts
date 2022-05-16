import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidadoresService } from '../../service/validadores.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
 form: any
  constructor(private fb:FormBuilder, private _validadores:ValidadoresService) {
  this.formulario();  
   }

  ngOnInit(): void {

  }

  get lastNameInvalid(){
    return this.form.get('lastName').invalid && this.form.get('lastName').touched
  }

  get emailInvalid(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  get phoneInvalid(){
    return this.form.get('phone').invalid && this.form.get('phone').touched
  }
  get passwordInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched
  }
  get confirmacionInvalid(){
    const pass1 = this.form.get('password').value;
    const pass2 = this.form.get('confirmacion').value;

    return (pass1 === pass2) ? false : true
  }

  formulario(){
    this.form= this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmacion: ['', Validators.required],
    },{
      validators: this._validadores.passwordsonIguales('password', 'confirmacion')
    });
  }
  guardar(){
    console.log(this.form);
    if(this.form.invalid)
    {
      return Object.values(this.form.controls).forEach(control =>{
        this.form.markAllAsTouched();
      })
    }
  }


}
