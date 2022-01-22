import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  constructor(private DbzService: DbzService) { }

  ngOnInit(): void {
  }

  @Input('nuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Output sirve para emitir eventos
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje() {
    if(this.nuevo.nombre.trim().length === 0){return;}

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
