import {AfterViewInit, Component, ContentChild, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { EventEmitter } from 'protractor';
import {fromEvent, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {DataResponseInetrface} from 'src/app/shered/interfaces/dataResponse.inetrface';
import {HourlyWeatherInterface} from 'src/app/shered/interfaces/hourlyWeather.interface';
import {CurrentCitySelector} from '../../store/selectors';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class BottomComponent implements OnInit {
  data: HourlyWeatherInterface[];

  constructor(private store: Store) {}
  ngOnInit() { 
    this.store
    .pipe(select(CurrentCitySelector))
    .subscribe((res: DataResponseInetrface) => {
      if (res) {
        const hourlyData = [...res.hourly].slice(1, 26);
        this.data = hourlyData.filter((hour, idx) => idx % 4 === 0);
      }
    });
  }
}
