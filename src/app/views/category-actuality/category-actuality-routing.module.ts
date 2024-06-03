import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryActualityComponent } from './category-actuality/category-actuality.component';

const routes: Routes = [{ 
  path:'',component:CategoryActualityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryActualityRoutingModule { }
