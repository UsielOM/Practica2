import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roll } from '../Interfaces/roll';
import { environment } from 'src/environments/environment';

import { Asignacion } from '../Interfaces/asignacion';
import { Reg } from '../Interfaces/regis';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http:HttpClient) { }

  getRolls():Observable<Roll[]>{
    return this.http.get<Roll[]>(environment.apiUrl + "/Rolls");
  }

  getIdUser():Observable<any>{
    return this.http.get<any>(environment.apiUrl + "/Maximo");
  }

  postRegistro(regis:Reg): Observable<Reg>{
    return this.http.post<Reg>(environment.apiUrl + "/post/registro/",regis);
  }

  postAsignacion(asig:Asignacion): Observable<Asignacion>{
    return this.http.post<Asignacion>(environment.apiUrl + "/post/asignacion/",asig);
  }



}
