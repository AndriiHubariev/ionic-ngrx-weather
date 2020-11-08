import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss'],
})
export class RootPage implements AfterViewInit, OnDestroy {
  public segment: string;
  private subs$: Subscription;
  constructor(private rout: Router, private location: Location) {}

  ngAfterViewInit(): void {
   this.subs$ = this.rout.events.subscribe(res => {
      if (location.pathname === '/today') {
        this.segment = '/';
      } else {
        this.segment = '/future';
      }
    });
  }
  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
