import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, pipe, Subscription} from 'rxjs';
import { fetchAction } from '../../../store/actions/fetch.action';
import { WeatherDataSelector } from '../../../store/selectors';


interface City {
  coord: {lat: number; lon: number};
  name: string;
  country: string;
  id: number;
  state: string;
}

@Injectable({
  providedIn: 'root',
})
export class CityAddService {
  public cityError = new BehaviorSubject('');
  public cityFormIsOpened = new BehaviorSubject(false);

  private allCitiesList = require('../../../../../city.list.json');

  constructor(public store: Store) {}

  public addCity(cityName: string): void {
    const choosedCity: City = this.allCitiesList.find(
      (city: City) => city.name.toLowerCase() === cityName.toLowerCase()
    );
    if (choosedCity) {
      if (this.checkCityExistence(cityName)) {
        return;
      }
      const cityname = choosedCity.name;
      this.store.dispatch(fetchAction({cityname}));
      this.closeCityForm();
    } else {
      this.throwCityError('wrong city name');
    }
  }

  public checkCityExistence(cityName: string): boolean {
    let isExist = false;
    this.store.select(pipe(WeatherDataSelector)).subscribe((data) => {
      return (isExist = !!data.find(
        (city) => city.timezone.toLowerCase() === cityName.toLowerCase()
      ));
    });
    isExist && this.throwCityError('city already exist');
    return isExist;
  }

  private throwCityError(error: string): void {
    this.cityError.next(error);
    setTimeout(() => {
      this.cityError.next('');
    }, 2500);
  }

  private closeCityForm(): void {
    this.cityFormIsOpened.next(false);
  }
}
