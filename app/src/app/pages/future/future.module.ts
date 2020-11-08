import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FuturePageRoutingModule} from './future-routing.module';

import {FuturePage} from './future.page';
import {TempChartComponent} from './components/minMaxTemp/tempChart/tempChart.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducer';
import {DaysChartComponent} from './components/days/daysChart/daysChart.component';
import {SlidesComponent} from './components/slides/slidesComponent/slidesComponent.component';
import {PressureChartComponent} from './components/slides/charts/pressureChart/pressureChart.component';
import {HumidityChartComponent} from './components/slides/charts/humidityChart/humidityChart.component';
import { WindChartComponent } from './components/slides/charts/windChart/windChart.component';
import { PopoverComponent } from './components/days/popover/popover.component';
import { DynamicIconComponent } from 'src/app/shered/components/dynamicIcon/dynamicIcon.component';
import { SheredModule } from 'src/app/shered/shered.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheredModule,
    FuturePageRoutingModule,
    StoreModule.forFeature('futureState', reducer),
  ],
  declarations: [
    FuturePage,
    TempChartComponent,
    DaysChartComponent,
    SlidesComponent,
    PressureChartComponent,
    HumidityChartComponent,
    WindChartComponent,
    PopoverComponent,
  ],
  providers: [],
})
export class FuturePageModule {}
