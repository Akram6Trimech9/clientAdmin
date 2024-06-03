import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvDetailsRoutingModule } from './rdv-details-routing.module';
import {DetailsComponent} from '../rdv-details/details/details.component'
import { HttpClientModule } from '@angular/common/http';
import {  RdvService } from '../../services/rdv.service';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RdvDetailsRoutingModule,
    HttpClientModule
  ],
  providers:[
    RdvService
  ]
})
export class RdvDetailsModule { }
