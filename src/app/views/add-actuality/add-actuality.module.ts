import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddActualityComponent} from './add-actuality/add-actuality.component'
import { AddActualityRoutingModule } from './add-actuality-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import {ActualittyService} from 'src/app/services/actualitty.service'

@NgModule({
  declarations: [AddActualityComponent],
  imports: [
    CommonModule,
    AddActualityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    CategoryService,
    ActualittyService
  ]
})
export class AddActualityModule { }
