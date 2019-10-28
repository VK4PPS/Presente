import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Funcionarios',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Cadastro de Funcionarios',
      url: '/funcionarios-cadastro',
      icon: 'person-add'
    },
    {
      title: 'Chamados',
      url: '/chamados',
      icon: 'calendar'
    },
    {
      title: 'Cadastro de Chamados',
      url: '/chamados-cadastro',
      icon: 'calendar' 
    }

    
  ];

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
