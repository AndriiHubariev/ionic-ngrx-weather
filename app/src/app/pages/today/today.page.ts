import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { CurrentCitySelector } from './store/selectors';


@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit, AfterViewInit {
  weatherState: string;
  constructor(private store: Store) { }
  ngAfterViewInit(): void {}

  ngOnInit() {
    this.store.pipe(select(CurrentCitySelector)).subscribe((res: DataResponseInetrface) => {
      if (res) {
        this.weatherState = res.current.weather[0].main;
      }
    });
  }
}
