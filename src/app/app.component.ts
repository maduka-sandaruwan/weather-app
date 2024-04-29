import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WetherService } from './services/wether.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private weatherService: WetherService){

  }
  cityName: string = 'nuwara eliya';
  weatherData?: WeatherData;

  ngOnInit(): void {

    console.log("OK");
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    // this.cityName = '';
    console.log("asd",this.cityName);
  };

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherdata(cityName)
    .subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response);
        
      }
    });
  }
  
}
