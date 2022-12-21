import { Pays } from './pays';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

  // Voir Pays
  // getPays(id_pays: number): Observable<object>{
  //   return this.http.get(`http://localhost:8082/projet/odk/Pays/unPays/${id_pays}`)
  // }

  getPays(): Observable<any>{
    return this.http.get("http://localhost:8082/projet/odk/Pays/liste");
  }
  // Ajouter Pays
  // postPays():

}
