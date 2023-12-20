import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
 
constructor(private router:Router,private apiCallService:ApiCallService){}
  back(){
    this.router.navigateByUrl('owner/ownerlogin')

  }
  register(){
    this.apiCallService.btnSubmit=true;
    this.router.navigateByUrl('owner/register')
  }
  hotelList(){
    // this.apiCallService.subBtn=false;
    this.router.navigateByUrl('owner/hotelList')
  }

}
