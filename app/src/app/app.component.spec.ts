import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { IonRouterOutlet, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture;
  let statusBarSpy;
  let splashScreenSpy;
  let platformReadySpy;
  let platformSpy;
  let component: AppComponent;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: Platform, useValue: platformSpy },
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the app', async () => {
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('it should containe ion-app', () => {
    const dE = fixture.debugElement.query(By.css('ion-app'));
    expect(dE).not.toBeNull();
  });
});
