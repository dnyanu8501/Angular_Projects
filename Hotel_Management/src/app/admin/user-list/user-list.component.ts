import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  endPoint="user"
  ownerData:any=[];
  
    constructor(private apiCallService:ApiCallService){}
   ngOnInit(){
    this.getData()
      
  
    }
    async getData(){
      this.ownerData= await this.apiCallService.getApiCall(this.endPoint).toPromise()
      
      console.log(this.ownerData);
    }
}
