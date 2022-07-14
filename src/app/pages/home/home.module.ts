import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './home-pages.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { CardsComponent } from './components/cards/cards.component';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';


@NgModule({
  declarations: [
    HomePagesComponent,
    NavbarHomeComponent,
    CardsComponent,
    RegisterUserComponent,
    VerUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
