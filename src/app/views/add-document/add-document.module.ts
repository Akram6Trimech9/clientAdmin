import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDocumentRoutingModule } from './add-document-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AddDocumentComponent} from './add-document/add-document.component'
import { HttpClientModule } from '@angular/common/http';
import {DocumentService} from 'src/app/services/document.service'
@NgModule({
  declarations: [AddDocumentComponent],
  imports: [
    CommonModule,
    AddDocumentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    DocumentService
  ]
})
export class AddDocumentModule { }
