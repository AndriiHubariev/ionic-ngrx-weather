/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchComponent } from './search.component';
import { Store, StoreModule } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { CityAddService } from './services/cityAdd.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const storeMock = jasmine.createSpyObj('Store', ['select']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent],
      providers: [{ provide: Store, useValue: storeMock }],
      // imports: [StoreModule.forRoot({}, {})]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the search input', () => {
    component.toggleForm();
    expect(component.formIsOpened).toBeTruthy();
  });

  it('should close the search input', () => {
    component.formIsOpened = true;
    component.toggleForm();
    expect(component.formIsOpened).toBeFalse();
  });

  it('should submit and send city', () => {
    const addCityService = TestBed.inject(CityAddService);
    const spy = spyOn(addCityService, 'addCity');
    component.submitCity('test');
    expect(spy).toHaveBeenCalledWith('test');
  });
  it('should fetch errors from addService', () => {
    const addCityService = TestBed.inject(CityAddService);
    const subject = addCityService.cityError;
    subject.next('test');
    component.ngOnInit();
    expect(component.cityError).toBe('test');
  });

});
