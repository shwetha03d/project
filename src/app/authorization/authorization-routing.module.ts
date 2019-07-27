import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 

// const routes:Routes=[
//   {path:'login',component:LoginComponent},
//   {path:'register',component:RegisterComponent}
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path:'login',
          component:LoginComponent
        },
        {
          path:'register',
          component:RegisterComponent
        }
  
  ])
  ],

  exports:[RouterModule]
})
export class AuthorizationRoutingModule { }
