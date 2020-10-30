import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootPageRoutingModule } from './root-routing.module';

import { RootPage } from './root.page';
import { ActionSheetService } from './services/actionSheet.service';
import { SearchComponent } from './components/search/search.component';
import { CityAddService } from './components/search/services/cityAdd.service';
import { SlidingItemComponent } from './components/slidingItem/slidingItem.component';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FetchEffect } from './store/effects/fetch.effect';
import { LocationService } from './store/services/location/location.service';
import { SheredModule } from '../../shered/shered.module';


@NgModule({
  declarations: [RootPage, SearchComponent, SlidingItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RootPageRoutingModule,
    FormsModule,
    SheredModule,
    StoreModule.forFeature('rootState', reducer),
    EffectsModule.forFeature([FetchEffect])
  ],
  providers: [ActionSheetService, CityAddService, LocationService]
})
export class RootPageModule {}
