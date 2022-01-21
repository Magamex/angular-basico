import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes: Personaje[] = [
    {nombre: 'Goku', poder: 9000},
    {nombre: 'Vegeta', poder: 8000},
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarPersonaje() {
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
