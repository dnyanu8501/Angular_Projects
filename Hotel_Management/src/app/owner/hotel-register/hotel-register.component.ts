import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.scss']
})
export class HotelRegisterComponent {
  registerForm!:FormGroup;
  endPoint="hotelDetails"

constructor(private router:Router,private fb:FormBuilder,private apiCallService:ApiCallService){}
ngOnInit(){
  this.formAllData()
}
formAllData(){
  this.registerForm=this.fb.group({
    ownername:['',[Validators.required]],
    ownermobile:[],
    hotelname:[],
    hoteladdress:[],
    hotelmobile:[],
    rating:[],
    room:[],
    price:[],
    hotelimages:[]

  })
}

submit(){
  this.apiCallService.postApiCall(this.endPoint,this.registerForm.value).subscribe(res =>{
    this.router.navigateByUrl("owner/ownersuccess")
  })
}
  back(){
    this.router.navigateByUrl("owner/ownersuccess")
  }

}
