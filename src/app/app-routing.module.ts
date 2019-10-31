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
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    ,canActivate: [AuthGuardService]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule' },
  { path: 'recuperar-senha', loadChildren: './recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'chamados', loadChildren: './chamados/chamados.module#ChamadosPageModule' },
  { path: 'chamados-detalhes', loadChildren: './chamados-detalhes/chamados-detalhes.module#ChamadosDetalhesPageModule' },
  { path: 'grupos-cadastro', loadChildren: './grupos-cadastro/grupos-cadastro.module#GruposCadastroPageModule',canActivate: [AuthGuardService] },
  { path: 'grupos-detalhes', loadChildren: './grupos-detalhes/grupos-detalhes.module#GruposDetalhesPageModule' },
  { path: 'grupos-lista', loadChildren: './grupos-lista/grupos-lista.module#GruposListaPageModule',canActivate:[AuthGuardService]},
  { path: 'perfil-detalhes', loadChildren: './perfil-detalhes/perfil-detalhes.module#PerfilDetalhesPageModule' },
  { path: 'pessoas-cadastro', loadChildren: './pessoas-cadastro/pessoas-cadastro.module#PessoasCadastroPageModule' },
  { path: 'pessoas-detalhes', loadChildren: './pessoas-detalhes/pessoas-detalhes.module#PessoasDetalhesPageModule' },
  { path: 'pessoas-lista', loadChildren: './pessoas-lista/pessoas-lista.module#PessoasListaPageModule' },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
