import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryActualityComponent} from './category-actuality/category-actuality.component'
import { CategoryActualityRoutingModule } from './category-actuality-routing.module';
import { HttpClientModule } from '@angular/common/http';
 import {CategoryService} from '../../services/category.service'
@NgModule({
  declarations: [CategoryActualityComponent],
  imports: [
    CommonModule,
    CategoryActualityRoutingModule,
    HttpClientModule
  ],
  providers:[
    CategoryService
  ]
})
export class CategoryActualityModule { }
