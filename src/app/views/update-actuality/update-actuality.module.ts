import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateActualityRoutingModule } from './update-actuality-routing.module';

import { UpdateActualityComponent} from './update-actuality/update-actuality.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UpdateActualityComponent],
  imports: [
    CommonModule,
    UpdateActualityRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateActualityModule { }
