import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { LandingComponent } from '../commonScreen/landing/landing.component';

const routes: Routes = [
  {path: "", component:OwnerLoginComponent},
  {path:'signup',component:OwnerSignupComponent},
  {path: "ownerlogin", component:OwnerLoginComponent},
  {path:"ownersuccess", component:OwnerSuccessComponent},
  {path:"register", component:HotelRegisterComponent},
  {path:"hotelList",component:HotelListComponent},
  {path:'home', component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
