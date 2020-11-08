import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { DailyInterface } from 'src/app/shered/interfaces/dailyWeather.interface';
import { FutureFutureSelector } from '../../../store/selectors';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-daysChart',
  templateUrl: './daysChart.component.html',
  styleUrls: ['./daysChart.component.scss']
})
export class DaysChartComponent implements OnInit {
  weatherData: DailyInterface[];

  constructor(private store: Store, public popoverController: PopoverController) { }

  ngOnInit() {
    this.store.pipe(select(FutureFutureSelector)).subscribe(res => {
      this.weatherData = res.data.days;
    });
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popover',
      componentProps: {
        day: ev
      },
    });
    return await popover.present();
  }

}
