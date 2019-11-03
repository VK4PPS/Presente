import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
      path: 'cadastro-usuario',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then(m => m.CadastroUsuarioPageModule), canActivate : [AuthGuardService]},
  },
  { path: 'grupos-cadastro', loadChildren: './grupos-cadastro/grupos-cadastro.module#GruposCadastroPageModule', },
  { path: 'grupos-detalhes', loadChildren: './grupos-detalhes/grupos-detalhes.module#GruposDetalhesPageModule', },
  { path: 'grupos-lista', loadChildren: './grupos-lista/grupos-lista.module#GruposListaPageModule', },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule', },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule',  },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate : [AuthGuardService]},
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'politica-de-privacidade', loadChildren: './politica-de-privacidade/politica-de-privacidade.module#PoliticaDePrivacidadePageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
