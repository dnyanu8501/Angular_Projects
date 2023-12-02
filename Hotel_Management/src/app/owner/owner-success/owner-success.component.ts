import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
 
constructor(private router:Router){}
  back(){
    this.router.navigateByUrl('owner/ownerlogin')

  }
  register(){
    this.router.navigateByUrl('owner/register')
  }
  hotelList(){
    this.router.navigateByUrl('owner/hotelList')
  }

}
