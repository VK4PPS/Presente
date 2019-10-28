import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Funcionarios } from 'src/model/funcionarios';

@Component({
  selector: 'app-chamados-cadastro',
  templateUrl: './chamados-cadastro.page.html',
  styleUrls: ['./chamados-cadastro.page.scss'],
})
export class ChamadosCadastroPage implements OnInit {

  listaFuncionarios : Funcionarios[] = []; // Variável para armazenar os funcionarios (Array)

  // Não esquecer de declarar ReactiveFormsModule em module.ts
  formGroup : FormGroup; // Formulário de cadastro -> Armazena todos os dados
  

  constructor(private formB : FormBuilder, // Inicializar o formulário (obrigatório para formGroup)
    private db: AngularFirestore, // Inicia o banco de dados do firebase (Firestore)
    private toastCtrl : ToastController,
    private dbF: AngularFirestore,
    private router : Router // Redirecionamento de páginas
    ) { // Exibir Mensagem

    // Inicializa o Formulário, obrigatório no construtor
    this.formGroup = this.formB.group({
      data : ['',Validators.required],
      idFuncionario : ['',Validators.required],
      nomeEquipamento : ['',Validators.required],
      defeito : ['',Validators.required],

    });
  }

  ngOnInit() {
  
    // Solicita os dados da coleção funcionarios no Firebase
    this.dbF.collection('funcionarios').snapshotChanges().subscribe(response=>{ 

      this.listaFuncionarios = []; // limpando a lista

      // response retona um objeto do firebase, precisamos converter em
      // um objeto funcionarios

      // forEach equivalente ao for, percorre todos os elementos do firebase
      // cada um se chama doc, ou seja, converter um doc em funcionarios.
      response.forEach(doc=>{ 
      
        let c = new Funcionarios(); // Cria um novo objeto funcionarios
        c.setFuncionarios(doc.payload.doc.data(),doc.payload.doc.id); // coloca os dados do doc em funcionarios

        this.listaFuncionarios.push(c); // adiciona este funcionarios a lista

      },err=>{ // Em caso de erro, executa esssa linha
        console.log(err);
      })

    });
  }

  cadastrar(){
    this.db.collection('chamados') // Seleciono a coleção do firebase
      .add(this.formGroup.value).then(() =>{ // .add realiza o cadastro, os dados do formGroup
        this.presentToast();// Dados cadastrados com sucesso
        this.router.navigate(['chamados']); // redireciona para chamados
      }).catch(()=>{ 
        console.log("Erro ao cadastrar!") // Erro
      });
      // then -> Sucesso
      // catch -> Erro
  }

  // template para toastController
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso',
      duration: 2000
    });
    toast.present();
  }

}
