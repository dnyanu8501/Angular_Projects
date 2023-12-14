import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
 loginUserName:any;
 url="http://localhost:3000/"
  id: any;

  bookNowId:any;
 recordByBookNowId:any;
  recordById:any;



  constructor(private httpClient:HttpClient) { }
  

  postApiCall(endPoint:any,formData:any){
    let url= this.url+endPoint
    return this.httpClient.post(url,formData)

  }
 getApiCall(endPoint:any){
    let url=this.url+endPoint;
    return this.httpClient.get(url);
 }

 patchApiCall(endPoint:any,id:any,formData:any){
  let url=this.url+endPoint+"/"+id;
  return this.httpClient.patch(url,formData)
 }

 deleteApiCall(endPoint:any,id:any){
  let url=this.url+endPoint+"/"+id;
  return  this.httpClient.delete(url);
 }

}
