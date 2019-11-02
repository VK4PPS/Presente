import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  formGroup: FormGroup;

  constructor(private formB: FormBuilder,
              private db: AngularFirestore,
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
  }
  enviar() {
    this.db.collection('contato')
      .add(this.formGroup.value).then(() => {
        this.presentToast();
        this.router.navigate(['/contato']);
      }).catch(() => {
        console.log('Erro ao enviar!');
      });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Enviado com sucesso',
      duration: 2000
        });
    toast.present();
  }

}
