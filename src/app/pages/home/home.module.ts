import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './home-pages.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    HomePagesComponent,
    NavbarHomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
