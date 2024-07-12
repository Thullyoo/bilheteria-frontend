import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieGetResponse } from '../../interfaces/moviegetresponse.interface';
import { CardComponent } from './card/card.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, RouterLink, CardComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  movies: MovieGetResponse[] = [];

  movieService = inject(MovieService);

  ngOnInit(){
      this.movieService.getAll().subscribe((movies) =>{
        this.movies = movies;
      })
  }
}
