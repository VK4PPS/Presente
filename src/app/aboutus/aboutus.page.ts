import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  developer(idValue : string){
    this.router.navigate(['developer',{id : idValue}]);
  } 

}
