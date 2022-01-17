import { Component } from "@angular/core";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
})

export class ListadoComponent{

  heroes: string[] = ["Deadpool", "Daredevil", "Superman", "Batman"];

  heroeBorrado: string = '';


  borrarHeroe(){
    //Si no se coloca el operador OR te devuelve un error porque puede devolver un string o un undefined
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
