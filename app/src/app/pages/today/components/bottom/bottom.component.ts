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
export class BottomComponent implements OnInit, OnDestroy, AfterViewInit{
  @ContentChild('li') li;
  sub$: Subscription;
  weatherData: HourlyWeatherInterface[];

  constructor(private store: Store) {}
  ngAfterViewInit(): void {
    // if (this.li) {
    //     fromEvent(this.li.nativeElement, 'click').subscribe(e => console.log(e))
    // }
  }

  ngOnInit() {
    this.sub$ = this.store
      .pipe(select(CurrentCitySelector))
      .subscribe((data: DataResponseInetrface) => {
        if (data) {
          const hourlyData = [...data.hourly].slice(1, 26);
          this.weatherData = hourlyData.filter((hour, idx) => idx % 4 === 0);
        }
      });
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  scroll(e) {
    console.log(e);
  }
}
