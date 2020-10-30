import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentWeatherInterface } from 'src/app/shered/interfaces/currentWeather.interface';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { CurrentCitySelector } from '../../store/selectors';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  cityName: string;
  weatherData: CurrentWeatherInterface;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.pipe(select(CurrentCitySelector)).subscribe((res: DataResponseInetrface) => {
      if (res) {
        this.weatherData = res.current,
        this.cityName = res.timezone;
      }
    });
  }

}
