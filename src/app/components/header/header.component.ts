import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo: string = "https://cdn-icons-png.freepik.com/512/1655/1655749.png?ga=GA1.1.1592243721.1720647224";
}
