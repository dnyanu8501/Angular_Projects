import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/commonSevices/api-call.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent {
endPoint="owner"
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
