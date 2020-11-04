import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DailyInterface } from 'src/app/shered/interfaces/dailyWeather.interface';
import { FutureFutureSelector } from '../../../store/selectors';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-daysChart',
  templateUrl: './daysChart.component.html',
  styleUrls: ['./daysChart.component.scss']
})
export class DaysChartComponent implements OnInit {
  weatherData: DailyInterface[];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.pipe(select(FutureFutureSelector)).subscribe(res => {
      this.weatherData = res.data.days;
    });
  }

}
