import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'grupos-cadastro',
    loadChildren: () => import('./grupos-cadastro/grupos-cadastro.module').then(m => m.GruposCadastroPageModule),
  },
  { path: 'grupos-cadastro', loadChildren: './grupos-cadastro/grupos-cadastro.module#GruposCadastroPageModule',},
  { path: 'grupos-detalhes', loadChildren: './grupos-detalhes/grupos-detalhes.module#GruposDetalhesPageModule', },
  { path: 'grupos-lista', loadChildren: './grupos-lista/grupos-lista.module#GruposListaPageModule', },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule', },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule',  },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule',},
  { path: 'recuperar-senha', loadChildren: './recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'developer', loadChildren: './developer/developer.module#DeveloperPageModule' },
  { path: 'developer-detalhes', loadChildren: './developer-detalhes/developer-detalhes.module#DeveloperDetalhesPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'privacidade', loadChildren: './privacidade/privacidade.module#PrivacidadePageModule' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}