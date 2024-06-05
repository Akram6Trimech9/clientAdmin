import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {  ContactsComponent } from '../contact/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from '../../services/contact.service'
import { TruncatePipe } from '../contact/contacts/TruncatePipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactsComponent,TruncatePipe],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[ContactService]
})
export class ContactModule { }
