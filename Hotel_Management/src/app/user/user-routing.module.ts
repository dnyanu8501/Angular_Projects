import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';



const routes: Routes = [
  {path:'' ,component:UsersuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
