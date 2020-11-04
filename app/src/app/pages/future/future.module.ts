import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuturePageRoutingModule } from './future-routing.module';

import { FuturePage } from './future.page';
import { TempChartComponent } from './components/minMaxTemp/tempChart/tempChart.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { DaysChartComponent } from './components/days/daysChart/daysChart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuturePageRoutingModule,
    StoreModule.forFeature('futureState', reducer ),
  ],
  declarations: [FuturePage, TempChartComponent, DaysChartComponent],
  providers: []
})
export class FuturePageModule {}
