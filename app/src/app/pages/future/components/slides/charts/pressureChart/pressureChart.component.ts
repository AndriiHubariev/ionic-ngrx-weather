import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Chart} from 'chart.js';
import {Subscription} from 'rxjs';
import {FutureFutureSelector} from 'src/app/pages/future/store/selectors';
import {FutureStateInterface} from 'src/app/pages/future/store/types/futureState.interface';

@Component({
  selector: 'app-pressure-chart',
  templateUrl: './pressureChart.component.html',
  styleUrls: ['./pressureChart.component.scss'],
})
export class PressureChartComponent implements OnInit, OnDestroy {
  private subs$: Subscription;
  public pressureChart: Chart = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(FutureFutureSelector))
      .subscribe((data: FutureStateInterface) => {
        if (this.pressureChart.canvas) {
          this.pressureChart.destroy();
        }
        this.pressureChart = new Chart('pressure_chart', {
          type: 'line',
          data: {
            labels: data.data.dates,
            datasets: [
              {
                label: 'Pressure',
                data: data.data.pressure,
                backgroundColor: 'rgb(247, 62, 62, .8)',
                borderColor: ['rgb(247, 62, 62, .4)'],
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
                    display: false,
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
