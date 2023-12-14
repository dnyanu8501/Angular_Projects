import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {
  showpass:boolean=true;
  userSignupForm!:FormGroup;
  genderselector:boolean=false;
  pass=false;
  conpass=false;
  password:any;
  conPassword:any;
  checkpass:boolean=true;
  endPoint:string="user";

  constructor(private fb:FormBuilder ,private router :Router,private apiCallService:ApiCallService ){}
  ngOnInit(){
    this.signupData();
  }
  signupData(){
    this.userSignupForm=this.fb.group({
      userName:['',[Validators.maxLength(15) ,Validators.pattern('[a-zA-Z ]*'),Validators.required]],
      
      pan: ['',[this.whitespacefun,Validators.maxLength(15),Validators.pattern('[A-Z 1-9]*'),Validators.required]],
    
      email:['',[Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),Validators.required]],
      password:['',[Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9@ #]*'),Validators.required]],
  
      conpassword:['',[Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9@ #]*'),Validators.required]], 
      gender:['male'],
      



    })
  } 
  
 whitespacefun(customval :any){
    console.log('whitespaces');
    
    let customwhite=customval.value?customval.value?.trim().length==0:null;
    return customwhite ? {'whiteSpace': true}:null;
  }
  confirmPass(){ 
    if(this.password==this.conPassword){
       this.checkpass=true
    }else{
      this.checkpass=false
    }
  }
  

  submit(){
    this.apiCallService.postApiCall(this.endPoint,this.userSignupForm.value).subscribe(res =>{
       
      console.log(res);
      this.router.navigateByUrl('user');
    })

  } 
  genselect(){
    this.genderselector=false;
  }

  back(){
    this.router.navigateByUrl("user");
  }
  hidepass(){
    this.pass=!this.pass;
  }
  hideconpass(){
    this.conpass=!this.conpass
  }


  showPassword(){
    this.showpass=!this.showpass
  }

}
