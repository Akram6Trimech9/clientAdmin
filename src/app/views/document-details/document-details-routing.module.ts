import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentDetailsComponent} from './document-details/document-details.component'
const routes: Routes = [{
  path:'',component:DocumentDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentDetailsRoutingModule { }
