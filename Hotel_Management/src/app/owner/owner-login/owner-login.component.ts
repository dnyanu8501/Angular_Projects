import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
  ownerLoginForm!: FormGroup;
  showpass:boolean=true;
  endPoint="owner";
  signupFormData:any;
  wrongpass:boolean=false;

  constructor(private fb:FormBuilder,private router:Router,private apiCallService:ApiCallService){}
  ngOnInit(){
    this.logindata();
    this.getsingData();
    
  }
  logindata(){
    this.ownerLoginForm=this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  getsingData(){
    this.apiCallService.getApiCall(this.endPoint).subscribe((item:any)=>{
      this.signupFormData=item;
      console.log(this.signupFormData);
      
    })
  }
  login(){
   
    if(this.ownerLoginForm.value){
        this.signupFormData.forEach((ele:any) => {
          if(ele.fname==this.ownerLoginForm.value.userName && ele.password==this.ownerLoginForm.value.password){
            console.log(this.ownerLoginForm.value);
            this.wrongpass=false;
            
            this.router.navigateByUrl('owner/ownersuccess')
          }
          else{
            if(this.ownerLoginForm.value.userName && this.ownerLoginForm.value.password){
            this.wrongpass=true;
            }
          }
        });
    }
   

  }
  showPassword(){
    this.showpass=!this.showpass;
  }
  signup(){
    this.router.navigateByUrl('owner/signup')
  }
  

}
