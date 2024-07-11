import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieGetResponse } from '../../../interfaces/moviegetresponse.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  movie = input.required<MovieGetResponse>();
}
