/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {SlidingItemComponent} from './slidingItem.component';
import {RootStateInterface} from '../../store/types/rootState.Interface';
import {EMPTY, of} from 'rxjs';
import {LocationService} from '../../store/services/location/location.service';
import {fetchAction} from '../../store/actions/fetch.action';
import {WeatherDataSelector} from '../../store/selectors';
import {By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { changeAction } from 'src/app/pages/today/store/actions/changeCity.action';
import { IonItemSliding, MenuController } from '@ionic/angular';

describe('SlidingItemComponent', () => {
  let component: SlidingItemComponent;
  let fixture: ComponentFixture<SlidingItemComponent>;
  let store: MockStore<RootStateInterface>;

  // tslint:disable-next-line: prefer-const
  let city: {
    current: {
         name: 'test',
             clouds: 0,
             dew_point: 0,
             dt: 0,
             feels_like: 0,
             humidity: 0,
             pressure: 0,
             sunrise: 0,
             sunset: 0,
             temp: 0,
             uvi: 0,
             visibility: 0,
             weather: [
               {
                 description: '',
                 main: '',
                 icon: '',
                 id: 0,
               },
             ],
             wind_deg: 0,
             wind_speed: 0,
       },
       daily: [],
       hourly: [],
       lat: 0,
       lon: 0,
       minutely: [],
       timezone: 'test',
       timezone_offset: 0
 };

  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [SlidingItemComponent],
      providers: [provideMockStore({initialState}), LocationService],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SlidingItemComponent);
    component = fixture.componentInstance;

    // fixture.detectChanges();

    spyOn(store, 'dispatch').and.callFake(() => {});
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current location on init', () => {
    const spy = spyOn(component.locationService, 'getСurrentLocation').and.callFake(() => EMPTY);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should dispatch fetchAction on ionit', () => {
    const coords = {
      lat: 0,
      lon: 0,
    };
    spyOn(component.locationService, 'getСurrentLocation').and.returnValue(of(coords));
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fetchAction({coords}));
  });

  it('should render data on init', () => {
    const mockWeatherDataSelector = store.overrideSelector(
      WeatherDataSelector,
      [
        {
          current: {
            name: '',
            clouds: 0,
            dew_point: 0,
            dt: 0,
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            sunrise: 0,
            sunset: 0,
            temp: 0,
            uvi: 0,
            visibility: 0,
            weather: [
              {
                description: '',
                main: '',
                icon: '',
                id: 0,
              },
            ],
            wind_deg: 0,
            wind_speed: 0,
          },
          daily: [],
          hourly: [],
          lat: 0,
          lon: 0,
          minutely: [],
          timezone: 'test',
          timezone_offset: 0,
        },
      ]
    );

    fixture.detectChanges();
    component.weatherData$.subscribe((data) => {
      expect(data.length).toBe(1);
    });
  });

  it('shuld change current city', () => {
    component.chooseCurrentCity(city);
    expect(store.dispatch).toHaveBeenCalledWith(changeAction({city}));
  });
});
