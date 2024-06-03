import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  url = 'http://localhost:3000/api/documents/'
  constructor(private _http:HttpClient) {
   }

   addDocument(payload: any) :Observable<any>{
     return this._http.post<any>(`${this.url}`, payload)
   }

   getDocuments() :Observable<any>{
    return this._http.get<any>(`${this.url}`)
  }
}
