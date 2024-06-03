import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  url = 'http://localhost:3000/api/rdv/'
  constructor(private _http: HttpClient){}
  
  getAllRdv():Observable<any[]>{ 
     return this._http.get<any[]>(`${this.url}`)
  }
  getOneRdv(id :any):Observable<any>{ 
    return this._http.get<any>(`${this.url}${id}`)
 }
  acceptRdv(id: string): Observable<any> {
    return this._http.patch<any>(`${this.url}accept/${id}`, {});
  }
  
  refuseRdv(id: string): Observable<any> {
    return this._http.patch<any>(`${this.url}refuse/${id}`, {});
  }
  deleteRdv(id:string) :Observable<any>{
    return this._http.delete<any>(`${this.url}${id}`);

  }
}