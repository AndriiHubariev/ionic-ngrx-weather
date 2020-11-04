import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { show } from 'src/app/app.animations';
import { fatchFutureAction } from 'src/app/pages/future/store/actions/fetch.action';
import { CurrentWeatherInterface } from 'src/app/shered/interfaces/currentWeather.interface';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { CurrentCitySelector } from '../../store/selectors';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [show]
})
export class TopComponent implements OnInit, OnDestroy {
  private subs$: Subscription;
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
  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
