import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { CurrentCitySelector } from './store/selectors';


@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit, AfterViewInit, OnDestroy {
  public weatherState: string;
  private subs$: Subscription;
  constructor(private store: Store) { }
  ngAfterViewInit(): void {}

  ngOnInit() {
   this.subs$ = this.store.pipe(select(CurrentCitySelector)).subscribe((res: DataResponseInetrface) => {
      if (res) {
        this.weatherState = res.current.weather[0].main;
      }
    });
  }
  scrollBottom(content) {
    content.scrollToBottom(1000);
  }
  scrollTop(content) {
    content.scrollToTop(1000);
  }
  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
