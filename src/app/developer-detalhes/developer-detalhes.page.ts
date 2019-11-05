import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/model/developer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-developer-detalhes',
  templateUrl: './developer-detalhes.page.html',
  styleUrls: ['./developer-detalhes.page.scss'],
})
export class DeveloperDetalhesPage implements OnInit {
  
  id : string; // armazena o id para consulta
  formGroup : FormGroup; // dados do formulário
  developer : Developer = new Developer(); // armazena o cliente da consulta
  imagem : any;
  idimg : string;

  constructor(private actRoute : ActivatedRoute, // capturar o ID
    private formB : FormBuilder, // Inicializar o formulário
    private db: AngularFirestore, // Banco de dados do firebase
    private toastCtrl : ToastController, // Exibe uma mensagem
    private router : Router, // Redirecionamento de páginas
    private alertController : AlertController,
    private auth : AngularFireAuth,
    public firestorage : AngularFireStorage,
    private loadingController : LoadingController) { // Exibe mensagem de cofirmação
    
    // Capturando o Id do cliente
    this.id = this.actRoute.snapshot.paramMap.get('id');

    // Inicializando o formulário
    this.formGroup = this.formB.group({
      nome : [],
      funcao : [],
      email : [],
      sobrenome :[],
      telefone :[],
    })
  }

  ngOnInit() {
    // Carregar os dados do cliente selecionado
    this.db.collection("developers") // Seleciona a coleção cliente
    .doc(this.id).get().subscribe(response=>{ // .doc seleciona o cliente com base no id

      // Atribuindo os dados do response para a variável cliente
      
      this.developer.id = this.id; 
      this.downloadImage();
      this.developer.funcao = response.data().funcao;
      this.developer.nome = response.data().nome;
      this.developer.telefone = response.data().telefone;
      this.developer.email = response.data().email;
      this.developer.sobrenome = response.data().sobrenome;
     })
  }

  atualizar(){
    // Atualiza dos dados do cliente
    this.db.collection('developers') // seleciona a coleção cliente
      .doc(this.developer.id) // Seleciona pelo ID do cliente
        .set(this.formGroup.value) // Envia o formGroup com os dados selecionados
          .then(() =>{
            this.presentToast(); // Dados atualizados
            this.router.navigate(['developer']);
          }).catch(()=>{
            console.log('Erro ao Atualizar'); // Erro ao atualizar
          })
  }

  excluir(){
    this.db.collection('developers') // seleciona a coleção cliente
      .doc(this.developer.id) // Seleciona pelo ID do cliente
        .delete().then(()=>{ // Executa a exclusão

      this.router.navigate(['developer']); // redireciona para home
    })
  }

  voltar(){
this.router.navigate(['developer']); // redireciona para home
    };

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

  enviaArquivo(event){
    this.imagem = event.srcElement.files[0];
    this.uploadStorage();
  }
 
  async uploadStorage(){

    let loading = await this.loadingController.create({
      message: 'Carregando!',
      duration: 2000
    });

    await loading.present();

    let urlImage = this.firestorage.storage.ref().child(`perfil/${this.id}.jpg`);
    urlImage.put(this.imagem).then(resp =>{
      this.downloadImage();
    });
  }


  downloadImage(){
    let ref = this.firestorage.storage.ref().child(`perfil/${this.id}.jpg`);
    ref.getDownloadURL().then(url =>{
      this.imagem = url;
    })};
  
  }

