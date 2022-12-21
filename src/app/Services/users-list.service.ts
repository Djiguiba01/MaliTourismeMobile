import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http:HttpClient) { }
  getUsersApp(): Observable<object>{
    return this.http.get("http://localhost:8082/user/utilisateurs")
  }
}
