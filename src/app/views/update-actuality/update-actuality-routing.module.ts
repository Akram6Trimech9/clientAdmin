import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateActualityComponent } from './update-actuality/update-actuality.component';

const routes: Routes = [{ 
   path:'', component: UpdateActualityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateActualityRoutingModule { }
