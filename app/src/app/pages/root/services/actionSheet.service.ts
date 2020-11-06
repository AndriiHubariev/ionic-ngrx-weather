import {Injectable} from '@angular/core';
import {ActionSheetController, MenuController} from '@ionic/angular';
import {select, Store} from '@ngrx/store';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import {changeAction} from '../../today/store/actions/changeCity.action';
import {takeAction} from '../../today/store/actions/takeCity.action';
import {CurrentCitySelector} from '../../today/store/selectors';
import {deleteAction} from '../store/actions/delete.action';
import {WeatherDataSelector} from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class ActionSheetService {
  constructor(
    public actionSheetController: ActionSheetController,
    private store: Store,
    private menu: MenuController,
  ) {}

  async presentActionSheet(name: string, city: DataResponseInetrface) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Watch',
          handler: () => {
            this.chooseCurrentCity(city);
          },
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteCity(name);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
      ],
    });
    await actionSheet.present();
  }

  chooseCurrentCity(city: DataResponseInetrface) {
    this.store.dispatch(changeAction({city}));
    setTimeout(() => {
      this.menu.close();
    }, 200);
  }

  deleteCity(cityName: string) {
    let currentCity: DataResponseInetrface;
    this.store.dispatch(deleteAction({cityname: cityName}));
    currentCity = this.getCurrentCity();
    if (currentCity.timezone.toLowerCase() === cityName.toLowerCase()) {
      currentCity = this.takeFirstCityFromData();
      this.store.dispatch(takeAction({city: currentCity}));
    }
  }

  getCurrentCity(): DataResponseInetrface {
    let currentCity: DataResponseInetrface;
    this.store
      .pipe(select(CurrentCitySelector))
      .subscribe((city) => (currentCity = city));
    return currentCity;
  }

  takeFirstCityFromData(): DataResponseInetrface {
    let city: DataResponseInetrface;
    this.store
      .pipe(select(WeatherDataSelector))
      .subscribe((data) => (city = data[0]));
    return city;
  }
}
