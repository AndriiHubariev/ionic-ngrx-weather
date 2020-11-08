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
  public tempChart: Chart = [];
  constructor(private store: Store) {}

  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(FutureFutureSelector))
      .subscribe((data: FutureStateInterface) => {

        if (this.tempChart.canvas) {
          this.tempChart.destroy();
        }

        Chart.defaults.global.defaultFontSize = 10;
        this.tempChart = new Chart('temp_chart', {
          type: 'line',
          data: {
            labels: data.data.dates,
            datasets: [
              {
                label: 'max temp',
                data: data.data.maxTemp,
                borderColor: ['rgb(247, 62, 62, .4)'],
                borderWidth: 3,
                radius: 2,
                pointBorderColor: 'rgb(255, 0, 0,.4)',
                fill: false,
              },
              {
                label: 'min temp',
                data: data.data.minTemp,
                borderColor: ['rgb(37, 37, 245, .4)'],
                borderWidth: 3,
                radius: 2,
                pointBorderColor: 'rgb(0, 0, 255, .4)',
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
                  // ticks: {
                  //   min: -20,
                  //   max: 40,
                  //   stepSize: 10,
                  // },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    zeroLineColor: 'rgb(145, 198, 229, .3)',
                    color: [
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)',
                      'rgb(145, 198, 229, .3)'],
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
