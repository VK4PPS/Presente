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
      icon: 'contacts'
    },
    {
      title: 'Criar Grupos',
      url: '/grupos-cadastro',
      icon: 'contacts'
    },
    {
      title: 'Seu Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'chatboxes'
    },
    {
      title: 'Sobre Nós',
      url: '/aboutus',
      icon: 'list',
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
