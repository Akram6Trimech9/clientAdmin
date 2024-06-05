import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
 templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts : any[] =[]
  showModal = false;
  message: string = '';

  constructor(private contactService : ContactService){


  }
  openModal() {
    this.showModal = !this.showModal;
  }
  sendMessage() {
     console.log('Message:', this.message);
     this.closeModal();
  }
  closeModal() {
    this.showModal = false;
    this.message = '';  
  }
  ngOnInit(): void {
      this.contactService.getAllContacts().subscribe(res=>{ 
         this.contacts = res
      })
  }
  deleteContact(id: any) {
    this.contacts = this.contacts.filter(item => item._id !== id);

    this.contactService.deleteContact(id).subscribe(
      (res) => {
        if (res) {
        }
      },
      (error) => {
        console.error('Error deleting contact:', error);
      }
    );
  }
   
}
