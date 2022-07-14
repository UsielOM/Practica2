import { Component, OnInit } from '@angular/core';
import { Join } from '../../Interfaces/join';
import { ServiceUserService } from '../../Services/service-user.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  
  user:Join [] = [];
  constructor(private _user:ServiceUserService) { }

  ngOnInit(): void {
    
      this._user.getUser().subscribe(res =>{
        this.user = res;
        console.log(this.user);
      }) ; 

  
  }

}
