import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;
  public appPages = [
    {
      title: 'Seus Grupos',
      url: '/grupos-lista',
      icon: 'person'
    },
    {
      title: 'Criar Grupos',
      url: '/grupos-cadastro',
      icon: 'people'
    },
    {
      title: 'Seu Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'person'
    },
    {
      title: 'Sobre Nós',
      url: '/aboutus',
      icon: 'person',
    },
    {
      title: 'Deslogar',
      url: '/logoff',
      icon: 'exit'
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
      timer (3000).subscribe(() => this.showSplash = false)
    });
  }
}
