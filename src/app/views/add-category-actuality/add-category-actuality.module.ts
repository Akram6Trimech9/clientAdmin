import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryActualityRoutingModule } from './add-category-actuality-routing.module';
import {AddCategoryComponent} from './add-category/add-category.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CategoryService} from '../../services/category.service'
@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule,
    AddCategoryActualityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    CategoryService
  ]
})
export class AddCategoryActualityModule { }
