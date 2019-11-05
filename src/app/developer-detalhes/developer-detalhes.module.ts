import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeveloperDetalhesPage } from './developer-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: DeveloperDetalhesPage
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
  declarations: [DeveloperDetalhesPage]
})
export class DeveloperDetalhesPageModule {}
