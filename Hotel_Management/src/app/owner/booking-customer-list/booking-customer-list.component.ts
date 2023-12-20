import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-booking-customer-list',
  templateUrl: './booking-customer-list.component.html',
  styleUrls: ['./booking-customer-list.component.scss']
})
export class BookingCustomerListComponent {
  hotelName:any;
  endPoint='hotelBooking'
  hotelBookingAllData:any;
  bookingListByHotel:any=[];
  constructor(private apiCallService:ApiCallService){}
  ngOnInit(){
    this.hotelName=this.apiCallService.HotelNameByList
   
    
    this.getData()
  }

  async getData(){

   this.hotelBookingAllData=await this.apiCallService.getApiCall(this.endPoint).toPromise();
   
   this.hotelBookingAllData.forEach((ele:any)=>{

    if(ele.HotelName==this.hotelName){
      this.bookingListByHotel.push(ele)
    }
    
    

   })
   
  }
}
