import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { Coords } from '../location/location.service';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getJok(): Observable<any> {
    return this.http.get('https://api.jokes.one/jod?category=animal');
  }

  getCityByName(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
  }

  getMultipleData(coords: Coords): Observable<DataResponseInetrface> {
    return this.http.get<DataResponseInetrface>(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
    );
  }

   getData(coords?: Coords, cityName?: string): Observable<DataResponseInetrface> {
    // IF CITY NAME IS PROVIDE - TAKE CITY BY NAME
    if (cityName) {
     return this.getCityByName(cityName).pipe(
       switchMap(response => this.getMultipleData(response.coord).pipe(
         map((second: DataResponseInetrface) => {
          //  FORMAT DATE
          second.current.sunrise = (second.current.sunrise + second.timezone_offset) * 1000;
          second.current.sunset = (second.current.sunset + second.timezone_offset) * 1000;
          for (const hour of second.hourly) {
            hour.dt = (hour.dt + second.timezone_offset) * 1000;
          }
          //  REWRITE TIMEZONE INTO CORRECT
          return {...second, timezone: response.name};
         })
       ))
           // get jock
     ).pipe(
       switchMap(data => this.getJok().pipe(
        map(jokes => {
          data.current.joke = jokes.contents.jokes[0].joke.text;
          return {...data};
        })
       )
     ));
    //  IF NO CITY NAME - TAKE CITY BY COORDS
    } else {
     return this.getMultipleData(coords).pipe(
      map((response: DataResponseInetrface) => {
        //  FORMAT DATE
        response.current.sunrise = (response.current.sunrise + response.timezone_offset) * 1000;
        response.current.sunset = (response.current.sunset + response.timezone_offset) * 1000;
        for (const hour of response.hourly) {
          hour.dt = (hour.dt + response.timezone_offset) * 1000;
        }
        response.timezone = this.sliceCityName(response.timezone);
        return response;
      }),
          // get jock
    ).pipe(
      switchMap(data => this.getJok().pipe(
       map(jokes => {
         data.current.joke = jokes.contents.jokes[0].joke.text;
         return {...data};
       })
      )
    ));
    }
  }

  sliceCityName(name: string): string {
    return name.replace(/^.*\/(.*)$/, '$1');
  }
}
const API_KEY = 'a14f52971f65d65431b884a2a65010c2';
