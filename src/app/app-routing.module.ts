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
    loadChildren: () => import('./grupos-cadastro/grupos-cadastro.module').then(m => m.GruposCadastroPageModule), canActivate : [AuthGuardService]
  },
  { path: 'grupos-cadastro', loadChildren: './grupos-cadastro/grupos-cadastro.module#GruposCadastroPageModule',},
  { path: 'grupos-detalhes', loadChildren: './grupos-detalhes/grupos-detalhes.module#GruposDetalhesPageModule', },
  { path: 'grupos-lista', loadChildren: './grupos-lista/grupos-lista.module#GruposListaPageModule', },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule', },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule',  },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate : [AuthGuardService]},
  { path: 'recuperar-senha', loadChildren: './recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
