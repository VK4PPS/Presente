import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionarios } from 'src/model/funcionarios';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-funcionarios-detalhes',
  templateUrl: './funcionarios-detalhes.page.html',
  styleUrls: ['./funcionarios-detalhes.page.scss'],
})
export class FuncionariosDetalhesPage implements OnInit {
  
  id : string; // armazena o id para consulta
  formGroup : FormGroup; // dados do formulário
  funcionarios : Funcionarios = new Funcionarios(); // armazena o funcionarios da consulta

  constructor(private actRoute : ActivatedRoute, // capturar o ID
    private formB : FormBuilder, // Inicializar o formulário
    private db: AngularFirestore, // Banco de dados do firebase
    private toastCtrl : ToastController, // Exibe uma mensagem
    private router : Router, // Redirecionamento de páginas
    private alertController : AlertController) { // Exibe mensagem de cofirmação
    
    // Capturando o Id do funcionarios
    this.id = this.actRoute.snapshot.paramMap.get('id');

    // Inicializando o formulário
    this.formGroup = this.formB.group({
      matricula : [],
      nome : [],
      salario : [],
      cargo : [],
      email : [],
    })
  }

  ngOnInit() {
    // Carregar os dados do funcionarios selecionado
    this.db.collection("funcionarios") // Seleciona a coleção funcionarios
    .doc(this.id).get().subscribe(response=>{ // .doc seleciona o funcionarios com base no id

      // Atribuindo os dados do response para a variável funcionarios
      this.funcionarios.id = this.id; 
      this.funcionarios.matricula = response.data().matricula;
      this.funcionarios.nome = response.data().nome;
      this.funcionarios.salario = response.data().salario;
      this.funcionarios.cargo = response.data().cargo;
      this.funcionarios.email = response.data().email;
    })
  }

  atualizar(){
    // Atualiza dos dados do funcionarios
    this.db.collection('funcionarios') // seleciona a coleção funcionarios
      .doc(this.funcionarios.id) // Seleciona pelo ID do funcionarios
        .set(this.formGroup.value) // Envia o formGroup com os dados selecionados
          .then(() =>{
            this.presentToast(); // Dados atualizados
            this.router.navigate(['home']);
          }).catch(()=>{
            console.log('Erro ao Atualizar'); // Erro ao atualizar
          })
  }

  excluir(){
    this.db.collection('funcionarios') // seleciona a coleção funcionarios
      .doc(this.funcionarios.id) // Seleciona pelo ID do funcionarios
        .delete().then(()=>{ // Executa a exclusão

      this.router.navigate(['home']); // redireciona para home
    })
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Atualizado com sucesso',
      duration: 2000
    });
    toast.present();
  }

  async confirm() {
    const alert = await this.alertController.create({
      header: 'Mensagem',
      message: 'Deseja excluir?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.excluir();
          }
        }
      ]
    });

    await alert.present();
  }
}

