import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  showpass:boolean=true;
  showpass1:boolean=true;
  showpass2:boolean=true;
  showForgotDiv:boolean=false;
  matcherr:boolean=false;
  endPoint='user';
  signupData:any;
  userName:any;
  password:any;
  loginFail:boolean=false
constructor(private router:Router,private apiCallService:ApiCallService) {}

ngOnInit(){
  this.getDataFromSignup();
}

 async getDataFromSignup(){
  this.signupData= await this.apiCallService.getApiCall(this.endPoint).toPromise()

}



loginData(data:any){
  this.signupData.forEach((ele:any) => {
    this.userName=ele.userName;
    this.password=ele.password;
   

  
 if(this.userName==data.userName  && this.password==data.password){
  this.loginFail=false;
  this.router.navigateByUrl("user/success")
 }else{
  this.loginFail=true
  
}
});
}
userSignup(){
  this.router.navigateByUrl("user/signup");
}
showIcon(){
  this.showpass=!this.showpass
}
showIcon1(){
  this.showpass1=!this.showpass1
}
showIcon2(){
  this.showpass2=!this.showpass2

}
newinputfield(newpassword:any,conpass:any){
     
  if(newpassword==conpass){
    this.matcherr=false;
  }else{
    this.matcherr=true;
  }

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
