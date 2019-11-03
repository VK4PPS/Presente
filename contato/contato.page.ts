import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Mensagens } from 'src/model/mensagens';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  listaMensagens: Mensagens [] = [];
  formGroup: FormGroup;

  constructor(private formB: FormBuilder,
              private db: AngularFirestore,
              private dbC: AngularFirestore,
              private toastCtrl: ToastController,
              private router: Router) {

    this.formGroup = this.formB.group({
      nome : ['', Validators.required],
      email : ['', Validators.required],
      assunto : ['', Validators.required],
      mensagem : ['', Validators.required],
    });
  }

  ngOnInit() {

  this.dbC.collection('mensagens').snapshotChanges().subscribe(response => {
  this.listaMensagens = [];

  response.forEach(doc => {

    let m = new Mensagens();
    m.setMensagem(doc.payload.doc.data(), doc.payload.doc.id);

    this.listaMensagens.push(m);

  }, err => {
    console.log(err);
  });

});
}
enviar() {
  this.db.collection('mensagens')
    .add(this.formGroup.value).then(() => {
      this.presentToast();
      this.router.navigate(['contato']);
    }).catch(() => {
      console.log('Erro ao enviar mensagem!');
    });

}

async presentToast() {
  const toast = await this.toastCtrl.create({
    message: 'Mensagem enviada!',
    duration: 2000
  });
  toast.present();
}}
