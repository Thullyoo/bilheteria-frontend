import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-movie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-movie.component.html',
  styleUrl: './register-movie.component.scss'
})
export class RegisterMovieComponent {

  movieService = inject(MovieService);

  route = inject(Router);

  form = new FormGroup({
    Name: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    Image: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    Description: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    Actors: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    Genre: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    Release_date: new FormControl<string>('', {nonNullable: true, validators: Validators.required})
  })


  onSubmit(){
      this.movieService.postMovie({
        name: this.form.controls.Name.value,
        image: this.form.controls.Image.value,
        description: this.form.controls.Description.value,
        actors: this.form.controls.Actors.value.split(','),
        genre: this.form.controls.Genre.value,
        release_date: this.form.controls.Release_date.value
      })
      .subscribe((movie) => {
        alert("Filme registrado!");
        console.log(movie);
      })
      this.route.navigateByUrl("/home");
  }
}
