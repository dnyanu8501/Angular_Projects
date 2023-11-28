import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared/shared.module';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';



@NgModule({
  declarations: [
    OwnerLoginComponent,
    OwnerSignupComponent,
    OwnerSuccessComponent,
    HotelRegisterComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
