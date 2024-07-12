import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieGetResponse } from '../interfaces/moviegetresponse.interface';
import { MovieResponse } from '../interfaces/movie-response.interface';
import { MovieRequest } from '../interfaces/movie-request.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpClient = inject(HttpClient)

  getAll(){
    return this.httpClient.get<MovieGetResponse[]>("http://localhost:8082/movies")
  }

  postMovie(request: MovieRequest){
    return this.httpClient.post<MovieResponse>("http://localhost:8082/movies", request)
  }
  
}
