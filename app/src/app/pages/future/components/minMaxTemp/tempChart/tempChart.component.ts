import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Chart} from 'chart.js';
import {Subscription} from 'rxjs';
import {FutureFutureSelector} from '../../../store/selectors';
import {FutureStateInterface} from '../../../store/types/futureState.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-tempChart',
  templateUrl: './tempChart.component.html',
  styleUrls: ['./tempChart.component.scss'],
})
export class TempChartComponent implements OnInit, OnDestroy {
  private subs$: Subscription;
  futureData: FutureStateInterface;
  public tempChart: Chart = [];
  constructor(private store: Store) {}

  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(FutureFutureSelector))
      .subscribe((data) => {
        this.futureData = data;

        if (this.tempChart.canvas) {
          this.tempChart.destroy();
        }

        Chart.defaults.global.defaultFontSize = 10;
        this.tempChart = new Chart('temp_chart', {
          type: 'line',
          data: {
            labels: this.futureData.data.dates,
            datasets: [
              {
                label: 'max temp',
                data: this.futureData.data.maxTemp,
                borderColor: ['rgb(247, 62, 62)'],
                borderWidth: 3,
                radius: 2,
                pointBorderColor: 'rgb(255, 0, 0,.4)',
                fill: false,
              },
              {
                label: 'min temp',
                data: this.futureData.data.minTemp,
                borderColor: ['rgb(37, 37, 245)'],
                borderWidth: 3,
                radius: 2,
                pointBorderColor: 'rgb(0, 0, 255, .6)',
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
                    display: false
                  },
                  ticks: {
                    min: -20,
                    max: 40,
                    stepSize: 10,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    zeroLineColor: 'rgb(255, 72, 0, .1)',
                    color: [
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)',
                      'rgb(255, 72, 0, .1)'],
                  },
                },
              ],
            },
          },
        });
      });
  }
  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

}
