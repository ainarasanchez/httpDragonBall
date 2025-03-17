import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  // para que un servicio pueda hacer una petición tiene que inyectar el HttpClient (Tipos de inyectable que hemos visto: services, router, activatedRoute, httpClient.)
  private httpClient = inject(HttpClient)
  private baseUrl: string = "https://dragonball-api.com/api/characters"

  /* observables en angular - peticiones asincronas nativas de angular */
  getAllObservable(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.baseUrl)
  }
  
  /* promises en angular - peticiones asincronas generales en javascript */
  getAllPromise(): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl))
  }
  
}
