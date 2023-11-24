import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
  ownerLoginForm!: FormGroup;
  showpass:boolean=true;

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.logindata();
  }
  logindata(){
    this.ownerLoginForm=this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){
    console.log(this.ownerLoginForm.value)

  }
  showPassword(){
    this.showpass=!this.showpass;
  }
  

}
