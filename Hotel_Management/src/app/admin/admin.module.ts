import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from '../shared/shared/shared.module';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ImagePathPipe } from './pipe/image-path.pipe';
import { SearchListPipe } from './pipe/search-list.pipe';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminSignupComponent,
    AdminSuccessComponent,
    HotelListComponent,
    OwnerListComponent,
    UserListComponent,
    ImagePathPipe,
    SearchListPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
