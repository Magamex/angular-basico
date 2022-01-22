import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


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

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }
  //Inyeccion de dependencia
  constructor(private DbzService: DbzService) { }

}
