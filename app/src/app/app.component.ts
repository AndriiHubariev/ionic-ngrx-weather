import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { Plugins } from '@capacitor/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-root',
  template: `<ion-app>
               <ion-router-outlet></ion-router-outlet>
             </ion-app>`,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // private  SplashScreen  = Plugins.SplashScreen;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}