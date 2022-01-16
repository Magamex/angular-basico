import { Component } from '@angular/core';

@Component({
  // Selector para utilizarlo en index.html
  selector: 'app-root',
  // Template del HTML llamando el archivo tambien se puede usar template:``
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo:string = 'Contador App';
  //Si se coloca undefiend no se visualiza el numero
  numero:number = 0;

  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }
}
