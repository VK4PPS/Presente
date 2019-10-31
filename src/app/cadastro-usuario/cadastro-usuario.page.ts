import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Perfil } from 'src/model/perfil';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

email : string;
senha : string;


formGroup : FormGroup;
perfil : Perfil = new Perfil();
idUser : string;

  constructor(private formBuild : FormBuilder,
    public afAuth: AngularFireAuth, // Autenticação) { }
  private router: Router,
  private toastCtrl : ToastController,
  private db : AngularFirestore) {

    this.formGroup = this.formBuild.group({
      nome: ['',Validators.required],
      email: ['',Validators.required],
      uid: localStorage.getItem('uid')
    });

    this.afAuth.user.subscribe(resp =>{
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

cadastrar() {
this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.senha)
this.db.collection('perfil').doc(this.idUser).set(this.formGroup.value)
.then(()=> {
  this.presentToast('Cadastro Realizado com Sucesso');
  this.router.navigate(['/login']);

}).catch(()=>{
  this.presentToast('Cadastro Inválido');  

})
}

async presentToast(msg : string) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}


}
