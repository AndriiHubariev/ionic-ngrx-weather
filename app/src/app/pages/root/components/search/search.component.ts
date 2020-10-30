import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { error } from 'protractor';
import { Observable, pipe, Subscription } from 'rxjs';
import { LoadingStateSelector } from '../../store/selectors';
import { CityAddService } from './services/cityAdd.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private subs$: Subscription;
  public cityError = '';
  public formIsOpened = false;
  public isLoading$: Observable<boolean>;

  constructor(private addCityService: CityAddService, public store: Store) { }

  ngOnInit() {
   this.subs$ = this.addCityService.cityError.subscribe(error => this.cityError = error);
   this.addCityService.cityFormIsOpened.subscribe(state => this.formIsOpened = state);
   this.isLoading$ = this.store.select(pipe(LoadingStateSelector));
  }

  toggleForm() {
    if (!this.formIsOpened) {
      return this.formIsOpened = true;
    } else {
      this.formIsOpened = false;
    }
  }
  submitCity(cityName: string) {
    this.addCityService.addCity(cityName);
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
