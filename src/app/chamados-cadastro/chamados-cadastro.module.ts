import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChamadosCadastroPage } from './chamados-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ChamadosCadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [ChamadosCadastroPage]
})
export class ChamadosCadastroPageModule {}
