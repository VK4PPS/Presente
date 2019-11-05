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
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'grupos-cadastro', loadChildren: './grupos-cadastro/grupos-cadastro.module#GruposCadastroPageModule',},
  { path: 'grupos-detalhes', loadChildren: './grupos-detalhes/grupos-detalhes.module#GruposDetalhesPageModule', },
  { path: 'grupos-lista', loadChildren: './grupos-lista/grupos-lista.module#GruposListaPageModule', },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule', },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule',  },  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },

<<<<<<< HEAD
<<<<<<< HEAD
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
   { path: 'politica-de-privacidade', loadChildren: './politica-de-privacidade/politica-de-privacidade.module#AboutusPageModule' }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
=======
>>>>>>> parent of c5ec83b... Merge pull request #2 from VK4PPS/Merge



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
<<<<<<< HEAD
>>>>>>> parent of c5ec83b... Merge pull request #2 from VK4PPS/Merge
=======
>>>>>>> parent of c5ec83b... Merge pull request #2 from VK4PPS/Merge
