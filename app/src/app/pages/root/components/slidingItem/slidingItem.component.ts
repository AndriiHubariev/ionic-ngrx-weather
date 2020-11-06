import { Component, OnInit } from '@angular/core';
import { IonItemSliding, MenuController} from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { slideCardAnim } from 'src/app/app.animations';
import { changeAction } from 'src/app/pages/today/store/actions/changeCity.action';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { ActionSheetService } from '../../services/actionSheet.service';
import { fetchAction } from '../../store/actions/fetch.action';
import { WeatherDataSelector } from '../../store/selectors';
import { Coords, LocationService } from '../../store/services/location/location.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-slidingItem',
  templateUrl: './slidingItem.component.html',
  styleUrls: ['./slidingItem.component.scss'],
  animations: [slideCardAnim]
})
export class SlidingItemComponent implements OnInit {
  public weatherData$: Observable<DataResponseInetrface[]>;
  public subs$: Subscription;

  constructor(
    private actionSheet: ActionSheetService,
    private store: Store,
    public locationService: LocationService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.locationService
    .getСurrentLocation()
    .subscribe((coords: Coords) => this.store.dispatch(fetchAction({coords})));

    this.weatherData$ = this.store.select(WeatherDataSelector);
  }
  chooseCurrentCity(city: DataResponseInetrface, slidingItem?: IonItemSliding) {
    this.store.dispatch(changeAction({city}));
    slidingItem && slidingItem.close();
    setTimeout(() => {
      this.menu.close();
    }, 300);
  }
  showActionSheet(cityName: string, city: DataResponseInetrface) {
    this.actionSheet.presentActionSheet(cityName, city);
  }
}
