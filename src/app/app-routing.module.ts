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
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule',  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
