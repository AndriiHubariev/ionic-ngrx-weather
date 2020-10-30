import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Coords {
  lat: number;
  lon: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {}

  getСurrentLocation(): Observable<Coords> {
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition((res) =>
      observer.next({lat: res.coords.latitude, lon: res.coords.longitude}),
      err => observer.error(err));
   });
  }
}
