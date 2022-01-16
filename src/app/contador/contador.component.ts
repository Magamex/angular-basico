import { Component } from "@angular/core";

@Component({
  selector: "app-contador",
  templateUrl: "./contador.component.html",
})

export class ContadorComponent{
  titulo:string = 'Contador App';
  //Si se coloca undefiend no se visualiza el numero
  numero:number = 0;
  base:number = 1;

  acumular(valor:number){
    this.numero += valor;
  }
}
