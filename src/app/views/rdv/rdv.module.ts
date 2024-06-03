import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvComponent } from './rdv/rdv.component';

import { RdvRoutingModule } from './rdv-routing.module';
import { RdvService } from '../../services/rdv.service';
import { HttpClientModule } from '@angular/common/http';
import {TruncatePipe} from '../rdv/rdv/TruncatePipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RdvComponent,TruncatePipe],
  imports: [
    CommonModule,
    RdvRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[RdvService]
})
export class RdvModule { }
