import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"", component:AdminLoginComponent},
  {path:"signup", component:AdminSignupComponent},
  {path:"success", component:AdminSuccessComponent},
  {path:"hotelList" , component:HotelListComponent},
  {path:"ownerList",component:OwnerListComponent},
  {path:"userList",component:UserListComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
