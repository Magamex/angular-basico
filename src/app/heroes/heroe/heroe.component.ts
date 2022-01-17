import { Component } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})

//Para crear un componente utilizar ng g c carpeta/nombreComponente
export class HeroeComponent{
  nombre:string = 'deadpool';
  edad:number = 30;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre} tiene ${this.edad} años`;
  }

  cambiarHeroe():void{
    this.nombre = 'daredevil';
  }

  cambiarEdad():void{
    this.edad = 45;
  }
}
