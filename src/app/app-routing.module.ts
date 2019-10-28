import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'funcionarios-cadastro', loadChildren: './funcionarios-cadastro/funcionarios-cadastro.module#FuncionariosCadastroPageModule' },
  { path: 'funcionarios-detalhes', loadChildren: './funcionarios-detalhes/funcionarios-detalhes.module#FuncionariosDetalhesPageModule' },
  { path: 'chamados-cadastro', loadChildren: './chamados-cadastro/chamados-cadastro.module#ChamadosCadastroPageModule' },
  { path: 'chamados-detalhes', loadChildren: './chamados-detalhes/chamados-detalhes.module#ChamadosDetalhesPageModule' },
  { path: 'chamados', loadChildren: './chamados/chamados.module#ChamadosPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
