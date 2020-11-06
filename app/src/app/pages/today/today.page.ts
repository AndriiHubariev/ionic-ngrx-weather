import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit, AfterViewInit {
  constructor(private store: Store) { }
  ngAfterViewInit(): void {}

  ngOnInit() { }
}
