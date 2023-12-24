import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' 
  url2 = '&appid=f55aae9c73d921df1d624da9dabe9373&units=metric'
  city:any='pune' 
  constructor(private httpClient:HttpClient) { }
  
  getDetails(){
    let url=this.url1+this.city+this.url2
    return this.httpClient.get(url)
  } 
}
