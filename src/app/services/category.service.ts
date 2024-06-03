import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/api/category-actualty/'
  constructor(private _http: HttpClient){}


  getAllCategories() :Observable<any>{ 
       return this._http.get<any>(`${this.url}`)
  }
  createNewCategory(payload : any) :Observable<any>{ 
     return this._http.post<any>(`${this.url}`,payload)
  }
}
