import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { WeatherDataSelector } from '../root/store/selectors';
import { CurrentCitySelector } from '../today/store/selectors';
import { fatchFutureAction } from './store/actions/fetch.action';

@Component({
  selector: 'app-future',
  templateUrl: './future.page.html',
  styleUrls: ['./future.page.scss'],
})
export class FuturePage implements OnInit, OnDestroy {
  private subs$: Subscription;

  constructor(private store: Store) {
   }

  ngOnInit() {
   this.subs$ = this.store.pipe(select(CurrentCitySelector)).subscribe(res => {
      this.store.dispatch(fatchFutureAction({data: res.daily}));
    });
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }

}
