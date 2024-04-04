import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  imagenLogo = "../../assets/logo.svg"

  constructor(private router: Router) {

  }


  homelink() {
    this.router.navigate(['/'])
  }
}
