import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {
 weatherDetails:any;
 cityName: any;
 CountryName: any;
 Temp: any;
 TempMin: any;
 TempMax: any;
 Pressure: any;
 humidity: any;
 speed: any;

  constructor(private dataService:DataService ){}
  ngOnInit(){
    this.dataService.getDetails().subscribe(res=>{
      this.weatherDetails=res
    console.log("ghgshghda",res);
      this.cityName = this.weatherDetails.name;
      this.CountryName = this.weatherDetails.sys.country
      this.Temp = this.weatherDetails.main.temp
      this.TempMax = this.weatherDetails.main.temp_max
      this.TempMin = this.weatherDetails.main.temp_min
      this.Pressure = this.weatherDetails.main.pressure
      this.humidity = this.weatherDetails.main.humidity
      this.speed = this.weatherDetails.wind.speed
      console.log( this.speed);
      
    })
    
  }
}
