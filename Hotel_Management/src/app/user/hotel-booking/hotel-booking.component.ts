import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MatDialog } from '@angular/material/dialog';
import { OrCodeComponent } from '../or-code/or-code.component';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
  hotelBookingForm!:FormGroup;
   animal:any='dog'
  constructor(private fb:FormBuilder,private router:Router ,public dialog: MatDialog,private apiCallService:ApiCallService ){}
  ngOnInit(){
this.allData()
  }

  allData(){
    this.hotelBookingForm=this.fb.group({
      
      name:['',[Validators.required, Validators.pattern('[A-Za-z ]*') ]],
      contact:['',[Validators.required , Validators.pattern('[0-9]*')]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      guests:['',[Validators.required]],
      paymentMethod:['',[Validators.required]],
      amount:['',[Validators.required]],

    })
  }
  submitData(){
 console.log(this.hotelBookingForm.value);
 
  }
  back(){
  

    this.router.navigateByUrl("user/success")
  }
 
  qrCode(): void {
    const dialogRef = this.dialog.open(OrCodeComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      
    });
  }

}
