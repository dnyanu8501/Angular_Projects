import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { ChangeimagepathPipe } from './pipe/changeimagepath.pipe';
import { SearchdataPipe } from './pipe/searchdata.pipe';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    UserLoginComponent,
    UsersuccessComponent,
    ChangeimagepathPipe,
    SearchdataPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

  ]
})
export class UserModule { }
