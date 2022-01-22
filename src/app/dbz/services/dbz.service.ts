import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  //Le especifico un guion bajo para avisar que es una propiedad privada
  private _personajes: Personaje[] = [
    {nombre: 'Goku', poder: 9000},
    {nombre: 'Vegeta', poder: 8000},
  ];

  get personajes(): Personaje[]{
    //Romper la referencia con personajes
    return [...this._personajes];
  }

  constructor(){}

  add(personaje: Personaje){
    this._personajes.push(personaje);
  }

}
