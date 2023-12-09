import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.scss']
})
export class OwnerSignupComponent {
  showpass:boolean=true;
  signControlForm!:FormGroup;
  genderselector:boolean=false;
  pass=false;
  conpass=false;
  password:any;
  conPassword:any;
  checkpass:boolean=true;
  endPoint:string="owner";

  constructor(private fb:FormBuilder ,private router :Router,private apiCallService:ApiCallService ){}
  ngOnInit(){
    this.signupData();
  }
  signupData(){
    this.signControlForm=this.fb.group({
      fname:['',[Validators.maxLength(15) ,Validators.pattern('[a-zA-Z ]*'),Validators.required]],
      
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
    this.apiCallService.postApiCall(this.endPoint,this.signControlForm.value).subscribe(res =>{
       this.router.navigateByUrl('owner/ownerlogin');
    })







    // console.log(this.password);
    
    // let genvalue=this.signControlForm.value.gender;
    // if(genvalue){
    // console.log('data',this.signControlForm.value);
    // this.signControlForm.reset();
    
    // }
    // else{
    //   this.genderselector=true;
    //   return;
    // }
  } 
  genselect(){
    this.genderselector=false;
  }

  back(){
    this.router.navigateByUrl("owner/ownerlogin");
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
