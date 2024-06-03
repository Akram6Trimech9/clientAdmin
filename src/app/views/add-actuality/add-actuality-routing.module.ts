import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActualityComponent } from './add-actuality/add-actuality.component';

const routes: Routes = [{ 
  path:'',component:AddActualityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddActualityRoutingModule { }
