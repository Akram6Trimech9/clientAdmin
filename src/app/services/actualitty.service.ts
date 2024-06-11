import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActualittyService {
  url = 'http://localhost:3000/api/actuality/'
  constructor(private _http: HttpClient){}


  getAllActualities() :Observable<any>{ 
       return this._http.get<any>(`${this.url}`)
  }
  getOneActuality(id :any):Observable<any>{
     return this._http.get<any>(`${this.url}${id}`)
  }
  createActuality(payload : any) :Observable<any>{ 
     return this._http.post<any>(`${this.url}`,payload)
  }
  deleteActuality(id:any) :Observable<any>{
    return this._http.delete<any>(`${this.url}${id}`)
 }

 updateActuality(id:any , record : any) : Observable<any>{
   return this._http.patch(`${this.url}${id}`,record)
 }
}
