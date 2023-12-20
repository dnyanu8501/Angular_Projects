import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  endPoint = "hotelDetails"
  userName: any;
  searchValue: any;
  ownerData: any = [];

  registerData: any;


  constructor(private apiCallService: ApiCallService, private router: Router) { }
  ngOnInit() {
    this.userName = this.apiCallService.loginUserName;
    this.getDataFromRegister()


  }

  async getDataFromRegister() {
    this.ownerData = []
    this.registerData = await this.apiCallService.getApiCall(this.endPoint).toPromise()
    // console.log(this.registerData.ownername);
    // if(this.apiCallService.loginUserName==this.registerData.value.ownername){
    // }

    //  console.log(this.registerData);
    this.dataAll()


  }
  dataAll() {
    this.registerData.forEach((item: any) => {
      if (this.userName == item.username) {
        this.ownerData.push(item)
      }
    });

  }
  back() {

    this.router.navigateByUrl('owner/ownersuccess')
  }
  edit(id: any) {
    let recordById: any = [];
   
    this.registerData.forEach((ele: any) => {
      if (ele.id == id) {
        recordById.push(ele)
      }

    })
    this.apiCallService.id = id;
    this.apiCallService.recordById = recordById;
    this.router.navigateByUrl("owner/register");

  }
  bookingCustomerList(hotelName :any){
    this.apiCallService.HotelNameByList=hotelName;
    this.router.navigateByUrl("owner/customerBookingList")
  }

  delete(id: any) {
    // this.apiCallService.deleteApiCall(this.endPoint,id).subscribe((res:any)=>{})
    this.apiCallService.deleteApiCall(this.endPoint, id).subscribe(res => {
      this.getDataFromRegister()
    })

  }
}