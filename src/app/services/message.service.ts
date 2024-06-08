import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { 

  }
createMessage(rec:any) : Observable<any>{
  return this.http.post<any>(`http://localhost:3000/api/message/`,rec)
}
}
