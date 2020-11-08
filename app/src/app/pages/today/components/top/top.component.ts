import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
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
export class TopComponent implements OnInit, OnDestroy {
  cityName: string;
  weatherData: CurrentWeatherInterface;
  private subs$: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(CurrentCitySelector))
      .subscribe((res: DataResponseInetrface) => {
        if (res) {
          this.cityName = res.timezone;
          this.weatherData = res.current;
        }
      });
  }
  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
