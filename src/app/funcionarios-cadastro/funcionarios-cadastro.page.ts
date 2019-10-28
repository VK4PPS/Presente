import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-cadastro',
  templateUrl: './funcionarios-cadastro.page.html',
  styleUrls: ['./funcionarios-cadastro.page.scss'],
})
export class FuncionariosCadastroPage implements OnInit {

  // Não esquecer de declarar ReactiveFormsModule em module.ts
  formGroup : FormGroup; // Formulário de cadastro -> Armazena todos os dados

  constructor(private formB : FormBuilder, // Inicializar o formulário (obrigatório para formGroup)
    private db: AngularFirestore, // Inicia o banco de dados do firebase (Firestore)
    private toastCtrl : ToastController,
    private router : Router  ) {

    // Inicializa o Formulário, obrigatório no construtor
    this.formGroup = this.formB.group({
      matricula : ['',Validators.required],
      nome : ['',Validators.required],
      salario : ['',Validators.required],
      cargo : ['',Validators.required],
      email : ['',Validators.required],
    });
  }

  ngOnInit() {
  }

  cadastrar(){
    this.db.collection('funcionarios') // Seleciono a coleção do firebase
      .add(this.formGroup.value).then(() =>{ // .add realiza o cadastro, os dados do formGroup
        this.presentToast();// Dados cadastrados com sucesso
        this.router.navigate(['home']);
      }).catch(()=>{ 
        console.log("Erro ao cadastrar!") // Erro
      });

  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso',
      duration: 2000
    });
    toast.present();
  }

}
