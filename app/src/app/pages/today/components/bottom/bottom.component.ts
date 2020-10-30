import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {DataResponseInetrface} from 'src/app/shered/interfaces/dataResponse.inetrface';
import {HourlyWeatherInterface} from 'src/app/shered/interfaces/hourlyWeather.interface';
import {CurrentCitySelector} from '../../store/selectors';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css'],
})
export class BottomComponent implements OnInit, OnDestroy {
  sub$: Subscription;
  weatherData: HourlyWeatherInterface[];

  constructor(private store: Store) {}

  ngOnInit() {
    this.sub$ = this.store
      .pipe(select(CurrentCitySelector)).pipe(
        map(data => {
          if (data) {
            data.hourly = data.hourly.filter((hour, idx) => data.hourly[idx + 4]);
            return data;
          }
        })
      )
      .subscribe((data: DataResponseInetrface) => {
        if (data) {
          this.weatherData = data.hourly;
        }
      });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
