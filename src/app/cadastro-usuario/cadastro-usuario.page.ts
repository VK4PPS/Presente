import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  email: string;
  senha: string;

  constructor(public afAuth: AngularFireAuth,
    private router : Router,
    private toastCtrl : ToastController,
    private menuCtrl : MenuController,) {
      this.menuCtrl.swipeEnable(false);
    }

  ngOnInit() {
  }

  cadastrar(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.senha).then(()=>{
      localStorage.setItem("uid",this.afAuth.auth.currentUser.uid);
      localStorage.setItem("email",this.afAuth.auth.currentUser.email);
      this.menuCtrl.swipeEnable(true)
      this.router.navigate(['/perfil']);
    this.presentToast('Preencha Seus Dados!');
  }).catch(()=>{
    this.presentToast('Cadastro inválido!');
  })

}

async presentToast(msg: string){
  const toast = await this.toastCtrl.create({
    message:msg,
    duration: 2000
  });
  toast.present();
}

logar(){ this.router.navigate(['/login']);}



}
