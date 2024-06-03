import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActualitiesComponent} from '../actualities/actualities/actualities.component'
import { ActualitiesRoutingModule } from './actualities-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ActualittyService } from 'src/app/services/actualitty.service';

@NgModule({
  declarations: [ActualitiesComponent],
  imports: [
    CommonModule,
    ActualitiesRoutingModule,
    HttpClientModule
  ],
  providers:[
    ActualittyService
  ]
})
export class ActualitiesModule { }
