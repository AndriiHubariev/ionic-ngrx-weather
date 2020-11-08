import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FutureFutureSelector } from 'src/app/pages/future/store/selectors';
import { FutureStateInterface } from 'src/app/pages/future/store/types/futureState.interface';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidityChart.component.html',
  styleUrls: ['./humidityChart.component.scss']
})
export class HumidityChartComponent implements OnInit {
  private subs$: Subscription;
  private data: FutureStateInterface;
  public humChart: Chart = [];
  constructor(private store: Store) { }

  ngOnInit() {
    this.subs$ = this.store
      .pipe(select(FutureFutureSelector))
      .subscribe((data) => {
        this.data = data;

        if (this.humChart.canvas) {
          this.humChart.destroy();
        }

        this.humChart = new Chart ('hum_chart', {
          type: 'bar',
              data: {
                labels: this.data.data.dates,
                datasets: [
                  {
                    label: 'Humidity',
                    data: this.data.data.humidity,
                    fill: false
                  },
                ],
              },
              options: {
                responsive: true,
                elements: {
                  rectangle: {
                    borderColor: 'rgb(37, 37, 245, .4)',
                    borderWidth: 1
                  }
                },
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

}
