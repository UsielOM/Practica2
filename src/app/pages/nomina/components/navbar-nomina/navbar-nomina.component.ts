import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-nomina',
  templateUrl: './navbar-nomina.component.html',
  styleUrls: ['./navbar-nomina.component.css']
})
export class NavbarNominaComponent implements OnInit {
  band: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
aparecer (){

  if(this.band ==true){
    this.band = false;
  }
  else{
    this.band=true
  }
  
}
aparecer2(){

this.band !=this.band
return this.band
}
}
