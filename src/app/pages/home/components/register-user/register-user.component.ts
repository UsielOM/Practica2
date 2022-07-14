import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../../Services/service-user.service';
import { HttpClient } from '@angular/common/http';
import { Roll } from '../../Interfaces/roll';

import { Asignacion } from '../../Interfaces/asignacion';
import { Reg } from '../../Interfaces/regis';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
// reg: Registro= new Registro();

reg: Reg = new Reg();

asig:Asignacion = new Asignacion();

// reg: Registro [] = [];

  constructor(private  _users:ServiceUserService, private http:HttpClient) { }
  rolls:Roll [] =[];
  idmax:any [] =[]
  
  ngOnInit(): void {

    this._users.getIdUser().subscribe(res =>{
      this.idmax = res;
        console.log(this.idmax)
    })

    this._users.getRolls().subscribe(res => {
      this.rolls = res;
    
    });

    
  }

  createRegistro(): void
  {
  
    this._users.postRegistro(this.reg).subscribe(result =>{
      this.reg = result;
    });

  
  }
  createAsig():void{
    this._users.postAsignacion(this.asig).subscribe(result =>{
      this.asig = result;
    })
  }



}
