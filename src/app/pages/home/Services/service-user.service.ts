import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roll } from '../Interfaces/roll';
import { environment } from 'src/environments/environment';
import { Registro } from '../Interfaces/Registro';
import { Asignacion } from '../Interfaces/asignacion';

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

  postRegistro(regis:Registro): Observable<Registro>{
    return this.http.post<Registro>(environment.apiUrl + "/post/registro/",regis);
  }

  postAsignacion(asig:Asignacion): Observable<Asignacion>{
    return this.http.post<Asignacion>(environment.apiUrl + "/post/asignacion/",asig);
  }



}
