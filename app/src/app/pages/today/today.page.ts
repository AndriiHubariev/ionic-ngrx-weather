import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { CurrentCitySelector } from './store/selectors';


@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit, OnDestroy {
  weatherState: string;
  private subs$: Subscription;
  constructor(private store: Store) { }

  ngOnInit() {

  this.subs$ = this.store.pipe(select(CurrentCitySelector)).pipe(
      map((res: DataResponseInetrface) => {
        if (res) {
          return res.current.weather[0].main;
        }
      })
    ).subscribe((res: string) => {
      this.weatherState = res;
    });
  }
  ngOnDestroy(): void {
    this.subs$.unsubscribe()
  }
}
