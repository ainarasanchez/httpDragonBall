import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista-personaje',
  imports: [],
  templateUrl: './vista-personaje.component.html',
  styleUrl: './vista-personaje.component.css'
})
export class VistaPersonajeComponent {
  @Input() idPersonaje: string = "";

  ngOnInit() {
    let id = Number(this.idPersonaje);
  } 

}
