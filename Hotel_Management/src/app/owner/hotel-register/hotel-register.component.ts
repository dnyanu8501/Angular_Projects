import { BootstrapOptions, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';
@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.scss']
})
export class HotelRegisterComponent {
  registerForm!:FormGroup;
  endPoint="hotelDetails"
  imagepath:any;
  user:any;
  id:any;
  recordById!:any;
  btnSubmit:any;
  durationInSeconds=5;
constructor(private router:Router,private fb:FormBuilder,
  private apiCallService:ApiCallService,private matSnackBar: MatSnackBar){
  
}
ngOnInit(){
 
 

  this.id=this.apiCallService.id;
  this.recordById=this.apiCallService.recordById;
  this.user=this.apiCallService.loginUserName
  this.btnSubmit=this.apiCallService.btnSubmit
// if(this.apiCallService.recordById)
// {
//   this.btnSubmit=false
// }else{
//   this.btnSubmit=true
// }

  this.formAllData()

  
}

formAllData(){
//  console.log(this.user);
// if(this.recordById){
//   this.btnSubmit=false
// }else{
//   this.btnSubmit=true
// }
 
  this.registerForm=this.fb.group({
    ownername:[this.recordById ? this.recordById[0]?.ownername:'',[Validators.required,Validators.pattern('[a-zA-z ]*')]],
    ownermobile:[this.recordById ? this.recordById[0]?.ownermobile:'',[Validators.required,Validators.pattern('[0-9]*')]],
    hotelname:[this.recordById ? this.recordById[0]?.hotelname:'',[Validators.required]],
    hoteladdress:[this.recordById ? this.recordById[0]?.hoteladdress:'',[Validators.required]],
    hotelmobile:[this.recordById ? this.recordById[0]?.hotelmobile:'',[Validators.required,Validators.pattern('[0-9]*')]],
    rating:[this.recordById ? this.recordById[0]?.rating:'',[Validators.required,Validators.pattern('[0-5.]*')]],
    room:[this.recordById ? this.recordById[0]?.room:'',[Validators.required,Validators.pattern('[0-9]*')]],
    price:[this.recordById ? this.recordById[0]?.price:'',[Validators.required,Validators.pattern('[0-9]*')]],
    // hotelimages:[this.recordById ? this.recordById[0].hotelimages:''],
    hotelimages:[''],
    username:[this.user]

  })
}


 submit(){
   this.endPoint="hotelDetails"
   console.log(this.registerForm.value);
   
  this.apiCallService.postApiCall(this.endPoint,this.registerForm.value).subscribe(res =>{
   

    this.matSnackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['notif-success'],
    });
    // this.matSnackBar.open("Login Successful", "", {
    //   duration: 3000,
    //   panelClass: ['green-snackbar'],
      
    //  })
    
    this.router.navigateByUrl("owner/ownersuccess")
  })
}
  back(){
  

    this.router.navigateByUrl("owner/ownersuccess")
  }

  ngOnDestroy(){
    this.apiCallService.btnSubmit=false
    this.apiCallService.recordById=[]
   
    
    // this.apiCallService.id=[]
  }

  update(){
    this.apiCallService.patchApiCall(this.endPoint,this.id,this.registerForm.value).subscribe(res=>{
      // console.log("res>>>>>",res);
      this.router.navigateByUrl('owner/hotelList')
    })
  }

}
