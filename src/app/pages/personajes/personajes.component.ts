import { Component, inject } from '@angular/core';
import { IPersonaje } from '../../interfaces/ipersonaje.interface';
import { PersonajesService } from '../../services/personajes.service';
import { IResponse } from '../../interfaces/iresponse.interface';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  arrPersonajesObservable: IPersonaje[] = [];
  arrPersonajesPromises: IPersonaje[] = [];
  personajesServices = inject(PersonajesService);

  async ngOnInit() {
    /* Consumición Observables - nativo angular */
    this.personajesServices.getAllObservable().subscribe({
      next: (data) => {
        this.arrPersonajesObservable = data.items
        console.log(this.arrPersonajesObservable)
      },
      error: (error) => {
        console.log(error)
      }
    })

    /* Consumición Promises - generico javascript */
    try {
      let response: IResponse = await this.personajesServices.getAllPromise()
      this.arrPersonajesPromises = response.items
      console.log('promises', this.arrPersonajesPromises)
    } catch (error) {
      console.log(error)
    }
  }
}
