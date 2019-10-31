import { Perfil } from 'src/model/perfil';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  formGroup : FormGroup;
  idUser : string;
  perfil : Perfil = new Perfil();
  imagem : any;

  constructor(private formBuild : FormBuilder,
    private auth : AngularFireAuth,
    private db : AngularFirestore,
    public firestorage : AngularFireStorage,
    private loadingController : LoadingController) {

      this.formGroup = this.formBuild.group({
        nome: ['',Validators.required],
        email: ['',Validators.required],
        uid: localStorage.getItem('uid')
      });

      this.auth.user.subscribe(resp =>{
        this.idUser = resp.uid;
        this.loadPerfil();
      });
     }

  ngOnInit() {

  }

  loadPerfil(){
    this.db.collection("perfil").doc(this.idUser).get().subscribe(response =>{
      if(response.exists==false){
        this.nPerfil();
      }else{
      }
    })
  }

  nPerfil(){
    let json = {
      nome: "",
      email: ""
    }
    this.db.collection('perfil').doc(this.idUser).set(json).then(() =>{})
  }

  atualizar(){
    this.db.collection('perfil').doc(this.idUser).set(this.formGroup.value).then(() =>{console.log('Atualizado com sucesso')
  }).catch(()=>{
    console.log('Erro ao atualizar');
  })
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

    let urlImage = this.firestorage.storage.ref().child(`perfil/${this.idUser}.jpg`);
    urlImage.put(this.imagem).then(resp =>{
      this.downloadImage();
    });
  }

downloadImage(){
  let ref = this.firestorage.storage.ref().child(`perfil/${this.idUser}.jpg`);
  ref.getDownloadURL().then(url =>{
    this.imagem = url;
  });

}
}