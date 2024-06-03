import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 url = 'http://localhost:3000/api/user/'
  constructor(private _http: HttpClient){}


  getAllUsers() :Observable<any>{ 
       return this._http.get<any>(`${this.url}all-users`)
  }
  deleteAUser(id:string) : Observable<any>{
     return  this._http.delete<any>(`${this.url}delete-user/${id}`)
  }
}
