import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private socket = io.io('*');

  
  getMessages() {
    let observable = new Observable<any>(observer => {
      this.socket.on('rdv-created', (data) => {
        observer.next(data);
      });
      return () => { 

       };  
    });
    return observable;
  }
}