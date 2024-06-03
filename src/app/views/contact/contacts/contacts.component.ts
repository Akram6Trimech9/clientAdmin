import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
 templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts : any[] =[]
  constructor(private contactService : ContactService){

  }
  ngOnInit(): void {
      this.contactService.getAllContacts().subscribe(res=>{ 
        
         this.contacts = res
      })
  }
}
