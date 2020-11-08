import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootPageRoutingModule } from './root-routing.module';

import { RootPage } from './root.page';
import { SearchComponent } from './components/search/search.component';
import { CityAddService } from './components/search/services/cityAdd.service';
import { SlidingItemComponent } from './components/slidingItem/slidingItem.component';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FetchEffect } from './store/effects/fetch.effect';
import { LocationService } from './store/services/location/location.service';
import { SheredModule } from '../../shered/shered.module';
import { ToastService } from './store/services/toast.service';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';


@NgModule({
  declarations: [RootPage, SearchComponent, SlidingItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RootPageRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SheredModule,
    StoreModule.forFeature('rootState', reducer),
    EffectsModule.forFeature([FetchEffect])
  ],
  providers: [CityAddService, LocationService, ToastService]
})
export class RootPageModule {}
