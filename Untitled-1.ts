<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Grupo {{this.grupos.nome}}</ion-title>
      </ion-toolbar>
</ion-header>
<ion-content>
    
  <!-- Atualizar / Excluir Grupo -->
  <form [formGroup]="formGroup">
    <ion-list>
      <ion-item>
        <ion-label floating>Nome</ion-label>
        <ion-input formControlName="nome" value="{{grupos.nome}}" type="text">
          </ion-input>
      </ion-item>
      <ion-item>
          <ion-label floating>Horas</ion-label>
          <ion-input formControlName="horas"  value="{{grupos.horas}}" type="number">
             </ion-input>
      </ion-item>
      <ion-item>
          <ion-label floating>Horas Por Aula</ion-label>
          <ion-input formControlName="horasPorAula" formGroupName="horasPorAula" value="{{grupos.horasPorAula}}" type="number">
            </ion-input>
      </ion-item>
  </ion-list>
  <ion-row>
      <ion-col size="6">
          <ion-button expand="full" (click)="atualizar()">Atualizar</ion-button>
      </ion-col>
      <ion-col size="6">
      </ion-col>
      <ion-col size="4">
          <ion-button color="danger" expand="full" (click)="confirm()">Excluir</ion-button>
      </ion-col>
    </ion-row>
  </form>
  <!-- Atualizar / Excluir Grupo -->


<!-- Busca Perfis -->
  <ion-searchbar showCancelButton="focus" [(ngModel)]="busca" (ionChange)="buscar($event)" placeholder="Buscar Pessoas"></ion-searchbar>
<!-- Resultado Busca -->
<ion-list>          <!-- Resultado Busca -->
  <ion-item *ngFor="let item of listaPerfil" >
    <ion-label>{{item.nome}}</ion-label>
    <ion-label>{{item.email}}</ion-label>
    <ion-icon name="add-circle" slot="end" (click)="cadastrar(
    this.idDocumento = item.id,
    this.nome = item.nome,
    this.email = item.email)"></ion-icon>
  </ion-item>
</ion-list>
<!-- Busca Perfis -->


<!-- Lista Grid Pessoas no Grupo -->
<ion-toolbar color="primary">           <!-- "Pessoas no Grupo" -->
    <ion-title>Pessoas no Grupo</ion-title>
  </ion-toolbar>

<ion-grid *ngFor="let item of listaPessoaGrupo">

<ion-row >

  <ion-col size-md align-self-start>
      Nome: {{item.nome}}
  </ion-col>

  <ion-col size-md align-self-start>
      Email: {{item.email}}
  </ion-col>

</ion-row>

<ion-row>
  <ion-col size-md>
      Horas Presente: {{(item.horas/60).toFixed(1)}}
  </ion-col>

  <ion-col size-md>
      Porcentagem Frequência: {{(((item.horas/60)-this.minutosSoma) / this.grupos.horas*100).toFixed(1)}}%
  </ion-col>

  

</ion-row>


<ion-row>
  <ion-col size-md>
      <input type="text" [(ngModel)]="y" type="number">
  </ion-col>

  <ion-col size-md>
      <ion-select [(ngModel)]="select" placeholder="Horas" value="60" >
          <ion-select-option value="60">Horas</ion-select-option>
          <ion-select-option value="1">Minutos</ion-select-option>
        </ion-select>
  </ion-col>


  <ion-col size="1" size-md align-self-start>
      <ion-icon name="add-circle" (click)="frequencia(this.x = this.y * this.select ,this.idDocumento = item.id, this.idPessoa = item.idPessoa, this.nome = item.nome, this.email = item.email, this.horas = item.horas)" color="primary"></ion-icon>
      <ion-icon name="remove-circle" (click)="frequencia(this.x = - this.y * this.select ,this.idDocumento = item.id, this.idPessoa = item.idPessoa, this.nome = item.nome, this.email = item.email, this.horas = item.horas)" color="primary"></ion-icon>
      <ion-icon name="trash" (click)="excluirPessoaGrupo( this.idDocumento = item.id )"></ion-icon>
    </ion-col>
   

</ion-row>
<ion-item-divider ></ion-item-divider>
</ion-grid>
<!-- Lista Pessoas no Grupo -->

</ion-content>
