import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Developer } from 'src/model/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.page.html',
  styleUrls: ['./developer.page.scss'],
})
export class DeveloperPage implements OnInit {

  listaDeveloper : Developer[] = []; 

  constructor(private db: AngularFirestore, 
    private router : Router) {
    }

  ngOnInit() {
     
  
    this.db.collection('developers').snapshotChanges().subscribe(response=>{ 

      this.listaDeveloper = [];

  
      response.forEach(doc=>{ 
      
        let c = new Developer(); // Cria um novo objeto cliente
        c.setDeveloper(doc.payload.doc.data(),doc.payload.doc.id); // coloca os dados do doc em clientes

        this.listaDeveloper.push(c); // adiciona este cliente a lista

      },err=>{ // Em caso de erro, executa esssa linha
        console.log(err);
      })

    });
  }


  goPage(idValue : string){
    // Redirecionando para ClienteDetalhes
    // enviando o id do cliente (idValue)
    this.router.navigate(['developer-detalhes',{id : idValue}]);
  } 



  
}