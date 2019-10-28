import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Funcionarios } from 'src/model/funcionarios';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  listaFuncionarios : Funcionarios[] = []; // Variável para armazenar os funcionarios (Array)

  constructor(private db: AngularFirestore, // Módulo de banco de dados
    private router : Router) {
      
    
    
  }

  ngOnInit() {
     
    // Solicita os dados da coleção funcionarios no Firebase
    this.db.collection('funcionarios').snapshotChanges().subscribe(response=>{ 

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


  goPage(idValue : string){
    // Redirecionando para FuncionariosDetalhes
    // enviando o id do funcionarios (idValue)
    this.router.navigate(['funcionarios-detalhes',{id : idValue}]);
  } 

}
