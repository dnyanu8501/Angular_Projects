import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { ChangeimagepathPipe } from './pipe/changeimagepath.pipe';
import { SearchdataPipe } from './pipe/searchdata.pipe';
import { SharedModule } from '../shared/shared/shared.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { FormsModule } from '@angular/forms';
import { OrCodeComponent } from './or-code/or-code.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UsersuccessComponent,
    ChangeimagepathPipe,
    SearchdataPipe,
    UserSignupComponent,
    HotelBookingComponent,
    OrCodeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
   

  ]
})
export class UserModule { }
