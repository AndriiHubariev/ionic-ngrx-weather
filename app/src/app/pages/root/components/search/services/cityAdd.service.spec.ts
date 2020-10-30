/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CityAddService } from './cityAdd.service';


describe('Service: CityAdd', () => {
  const storeMock = jasmine.createSpyObj('Store', ['select']);
  let service: CityAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CityAddService,
        { provide: Store, useValue: storeMock }
      ]
    });
    service = TestBed.inject(CityAddService);
  });

  it('should ...', inject([CityAddService], (service: CityAddService) => {
    expect(service).toBeTruthy();
  }));

  it('should throw wromg city name error if name is invalid', () => {
    service.addCity('wrong city name');
    service.cityError.subscribe(error => {
      expect(error).toBe('wrong city name');
    });
  });
});
