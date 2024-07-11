import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieGetResponse } from '../interfaces/moviegetresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<MovieGetResponse[]>("http://localhost:8082/movies")
  }
  
}
