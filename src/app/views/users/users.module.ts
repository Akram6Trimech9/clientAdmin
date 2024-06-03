import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent} from './users/users.component'
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
