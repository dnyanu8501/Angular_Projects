import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
constructor(private router:Router) {}

loginData(data:any){
 console.log(data);
  this.router.navigateByUrl("user/success")
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
