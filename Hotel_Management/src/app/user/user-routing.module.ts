import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from '../commonScreen/landing/landing.component';
import { UserSignupComponent } from './user-signup/user-signup.component';



const routes: Routes = [
  {path:'' ,component:UserLoginComponent},
  {path:'home',component:LandingComponent},
  {path:'success',component:UsersuccessComponent},
  {path:"signup",component:UserSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
