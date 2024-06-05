import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from './login.component';
import {AuthService} from 'src/app/services/auth.service'
import { CurrentUserService } from 'src/app/services/currentUser.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SweetAlert2Module,
    HttpClientModule
  ],
  providers:[
    AuthService,
    CurrentUserService
  ]
})
export class LoginModule { }
