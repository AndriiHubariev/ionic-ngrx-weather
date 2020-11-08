import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {DataResponseInetrface} from 'src/app/shered/interfaces/dataResponse.inetrface';
import {HourlyWeatherInterface} from 'src/app/shered/interfaces/hourlyWeather.interface';
import {CurrentCitySelector} from '../../store/selectors';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class BottomComponent implements OnInit, OnDestroy {
  data: HourlyWeatherInterface[];
  private subs$: Subscription;

  constructor(private store: Store) {}
  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(CurrentCitySelector))
      .subscribe((res: DataResponseInetrface) => {
        if (res) {
          this.data = res.hourly.filter((hour, idx) => idx % 4 === 0);
        }
      });
  }
  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
