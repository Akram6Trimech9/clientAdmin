import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { MessageService} from 'src/app/services/message.service'
@Component({
  selector: 'app-contacts',
 templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts : any[] =[]
  showModal = false;
  message: string = '';

  constructor(private contactService : ContactService,private messageService :MessageService){


  }
  emailUser : string = "";

  openModal(email:string) {
    this.emailUser = email;
    this.showModal = !this.showModal;
  }
  sendMessage() {
     const rec ={
      email : this.emailUser,
      message : this.message
     }
     this.messageService.createMessage(rec).subscribe(res=>{
      console.log(res)
     })
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
