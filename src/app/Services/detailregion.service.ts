import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detailregion } from './detailregion';

@Injectable({
  providedIn: 'root'
})
export class DetailregionService {

  constructor(private http:HttpClient) { }

  // """"""""""""""""""Affiche tout les info regions"""""""""""""
  getRegions(): Observable<object>{
    return this.http.get("http://localhost:8082/projet/odk/Regions/liste")
  }

    // """"""""""""""""""Affiche tout les info regions par ID"""""""""""""
    getRegionsId(id:number): Observable<Detailregion>{
      return this.http.get<Detailregion>("http://localhost:8082/projet/odk/Regions/uneRegion/${id}")
    }

// """"""""""""""""
  creer(file:any,nomregions:any,coderegion:any,activiterregion:any,superficieregion:any,languemregion:any,description:any,nombrecommentaire:any){
    const dat:FormData=new FormData();

    let reg = [{
      "nomregions": nomregions,
      "coderegion": coderegion,
      "activiterregion": activiterregion,
      "superficieregion": superficieregion,
      "languemregion": languemregion,
      "description": description,
      "nombrecommentaire": nombrecommentaire
    }]

    console.log(reg)
    dat.append('data', JSON.stringify(reg).slice(1,JSON.stringify(reg).lastIndexOf(']')));
    return this.http.post("http://localhost:8082/projet/odk/Regions/ajouterRegion", dat);
  }


}
