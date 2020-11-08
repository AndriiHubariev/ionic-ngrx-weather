import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FutureFutureSelector } from 'src/app/pages/future/store/selectors';
import { FutureStateInterface } from 'src/app/pages/future/store/types/futureState.interface';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-wind-chart',
  templateUrl: './windChart.component.html',
  styleUrls: ['./windChart.component.scss']
})
export class WindChartComponent implements OnInit, OnDestroy{

  private subs$: Subscription;
  public windChart: Chart = [];

  constructor(private store: Store) { }

  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(FutureFutureSelector))
      .subscribe((data: FutureStateInterface) => {

        if (this.windChart.canvas) {
          this.windChart.destroy();
        }
        this.windChart = new Chart('wind_chart', {
          type: 'line',
          data: {
            labels: data.data.dates,
            datasets: [
              {
                label: 'Wind speed',
                data: data.data.wind,
                backgroundColor: 'rgb(37, 37, 245, .6)',
                borderColor: ['rgb(37, 37, 245, .3)'],
                borderWidth: 3,
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                   display: false
                  },
                },
              ],
            },
          },
        });
      });
  }
  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
