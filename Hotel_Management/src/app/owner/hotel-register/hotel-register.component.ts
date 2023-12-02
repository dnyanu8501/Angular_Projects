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
  imagepath:any;

constructor(private router:Router,private fb:FormBuilder,private apiCallService:ApiCallService){}
ngOnInit(){
  this.formAllData()
}
formAllData(){
  this.registerForm=this.fb.group({
    ownername:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    ownermobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    hotelname:['',[Validators.required]],
    hoteladdress:['',[Validators.required]],
    hotelmobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    rating:['',[Validators.required,Validators.pattern('[0-5]')]],
    room:['',[Validators.required,Validators.pattern('[0-9]*')]],
    price:['',[Validators.required,Validators.pattern('[0-9]*')]],
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
