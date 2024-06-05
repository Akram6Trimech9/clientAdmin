import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'http://localhost:3000/api/contacts/'
  constructor(private _http: HttpClient){}
  getAllContacts():Observable<any[]>{ 
     return this._http.get<any[]>(`${this.url}`)
  }
  deleteContact(id :any ) :Observable<any>{ 
     return this._http.delete<any>(`${this.url}${id}`)
  }
}
