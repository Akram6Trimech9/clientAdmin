import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllDocumentsRoutingModule } from './all-documents-routing.module';
import {DocumentsComponent} from '../all-documents/documents/documents.component'
import { HttpClientModule } from '@angular/common/http';
import { DocumentService } from 'src/app/services/document.service';
import { TruncatePipe} from '../all-documents/documents/TruncatePipe'

@NgModule({
  declarations: [DocumentsComponent,TruncatePipe],
  imports: [
    CommonModule,
    AllDocumentsRoutingModule ,
    HttpClientModule
  ],
  providers:[
    DocumentService
  ]
})
export class AllDocumentsModule { }
