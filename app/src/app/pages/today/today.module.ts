import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayPageRoutingModule } from './today-routing.module';

import { TodayPage } from './today.page';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { SheredModule } from 'src/app/shered/shered.module';
import { HoursAnimDirective } from './components/bottom/directives/hoursAnim.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayPageRoutingModule,
    SheredModule,
    StoreModule.forFeature('todayState', reducers),
  ],
  declarations: [TodayPage, TopComponent, BottomComponent, HoursAnimDirective]
})
export class TodayPageModule {}
