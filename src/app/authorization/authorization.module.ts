import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthorizationModule { }
