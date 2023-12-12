import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {
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
      this.router.navigateByUrl('')
    }
    bookNow(){
      this.router.navigateByUrl("user/")
    }

}
