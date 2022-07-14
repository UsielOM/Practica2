import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prueba } from '../interface/prueba';

@Injectable({
  providedIn: 'root'
})
export class RegistarPruebaService {

  constructor(private http:HttpClient) { }



  createRprueba(prueb:Prueba): Observable<Prueba>{

    return this.http.post<Prueba>(environment.apiUrl + "/post/prueba/" ,prueb);
  }
}
