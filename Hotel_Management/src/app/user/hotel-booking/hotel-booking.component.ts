import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { MatDialog } from '@angular/material/dialog';
import { OrCodeComponent } from '../or-code/or-code.component';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
  hotelBookingForm!:FormGroup;
   endPoint='hotelBooking'
   recordByBookingNowId:any
   bookNowId:any
   amount:any
   startDate:any;
   endDate:any;
   originalAmount:any
   hotelName!:any
   events: string[] = [];
   showAmount:any;
  constructor(private fb:FormBuilder,private router:Router ,public dialog: MatDialog,private apiCallService:ApiCallService ){}
  ngOnInit(){
    this.bookNowId=this.apiCallService.bookNowId;
    this.recordByBookingNowId=this.apiCallService.recordByBookNowId
   
    
this.allData()

  }

  allData(){
    this.recordByBookingNowId.forEach((ele:any)=>{
         this.amount=ele.price
         this.hotelName=ele.hotelname
    })
    if(!this.originalAmount){
      this.originalAmount=this.amount
    }
    
    
    
    this.hotelBookingForm=this.fb.group({
     
      
      name:['',[Validators.required, Validators.pattern('[A-Za-z ]*') ]],
      contact:['',[Validators.required , Validators.pattern('[0-9]*')]],
      start:[this.startDate,[Validators.required]],
      end:[this.endDate,[Validators.required]],
      guests:['',[Validators.required]],
      paymentMethod:['',[Validators.required]],
      amount:[this.originalAmount,[Validators.required]],
      HotelName:[this.hotelName]

    })
  }


  addEvent(event: MatDatepickerInputEvent<Date>) {
    var time_difference = this.endDate.getTime() - this.startDate.getTime();
    var days_difference = time_difference / (1000 * 60 * 60 * 24);  
    this.originalAmount=days_difference*this.amount
    console.log(">>>>==>>",this.originalAmount);
    // this.endDate.toString();
    // this.startDate.toString()
    // this.allData()
    this.showAmount= this.originalAmount
  
  }
  
  
    
  
  submitData(){
    
    this.apiCallService.postApiCall(this.endPoint,this.hotelBookingForm.value).subscribe(res=>{

    })
 
   this.router.navigateByUrl('user/success')
    let str=this.hotelName + "  Hotel Successfully Booking  !!!"
   alert(str) 
 
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
