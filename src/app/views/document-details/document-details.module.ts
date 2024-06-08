import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentDetailsRoutingModule } from './document-details-routing.module';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DocumentDetailsComponent],
  imports: [
    CommonModule,
    DocumentDetailsRoutingModule,
    FormsModule
  ]
})
export class DocumentDetailsModule { }
