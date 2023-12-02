import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
endPoint="hotelDetails"

searchValue:any; 


registerData:any;


  constructor(private apiCallService:ApiCallService,private router:Router){}
  ngOnInit(){
    this.getDataFromRegister()
     
  }

  getDataFromRegister(){
    this.apiCallService.getApiCall(this.endPoint).subscribe(res=>{
      this.registerData=res;

   console.log(this.registerData);
    
    })
  }
  back(){
    this.router.navigateByUrl('owner/ownersuccess')
  }

}
