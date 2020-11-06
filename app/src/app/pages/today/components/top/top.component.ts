import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {show} from 'src/app/app.animations';
import {CurrentWeatherInterface} from 'src/app/shered/interfaces/currentWeather.interface';
import {DataResponseInetrface} from 'src/app/shered/interfaces/dataResponse.inetrface';
import {CurrentCitySelector} from '../../store/selectors';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [show],
})
export class TopComponent implements OnInit {
  cityName: string;
  weatherData: CurrentWeatherInterface;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .pipe(select(CurrentCitySelector))
      .subscribe((res: DataResponseInetrface) => {
        if (res) {
          this.weatherData = res.current;
          this.cityName = res.timezone;
          // const hourlyData = [...res.hourly].slice(1, 26);
          // this.dataBottom = hourlyData.filter((hour, idx) => idx % 4 === 0);
        }
      });
  }
}
