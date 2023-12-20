import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  showpass:boolean=true;
  showpass1:boolean=true;
  showpass2:boolean=true;
  showForgotDiv:boolean=false;
  matcherr:boolean=false;
  endPoint='admin';
  signupData:any;
  adminName:any;
  password:any;
  loginFail:boolean=false

  changePassForm!:FormGroup;
constructor(private router:Router,private apiCallService:ApiCallService,private fb:FormBuilder) {}

ngOnInit(){
  this.getDataFromSignup();
  this.forgotData();
}

 async getDataFromSignup(){
  this.signupData= await this.apiCallService.getApiCall(this.endPoint).toPromise()

}
forgotData(){
  this.changePassForm=this.fb.group({

    adminName:[],
    pan:[],
    email:[],
    password:[],
    conpassword:[],
    gender:[]
  

  })

}
loginData(data:any){
  this.signupData.forEach((ele:any) => {
    this.adminName=ele.adminName;
    this.password=ele.password;
   

  
 if(this.adminName==data.adminName  && this.password==data.password){
  this.loginFail=false;
  this.router.navigateByUrl("admin/success")
 }else{
  this.loginFail=true
  
}
});
}
userSignup(){
  this.router.navigateByUrl("admin/signup");
}
showIcon(){
  this.showpass=!this.showpass
}
showIcon1(){
  this.showpass1=!this.showpass1
}


  backBtn(){
    this.router.navigateByUrl('')
  }
  divForgot(){
    this.showForgotDiv=!this.showForgotDiv
  }
  forsubmit(data:any){
    console.log(data);
    
  }
  goLoginPage(){
    this.showForgotDiv=!this.showForgotDiv
  }
}
