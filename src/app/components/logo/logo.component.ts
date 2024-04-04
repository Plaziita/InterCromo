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
  imagenLogo = "https://imgs.search.brave.com/3ITDaOa34GB0y7msOV-iotJt3FeVeTomynfBv3h06q8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDczNTE5/MjMuanBn"

  constructor(private router: Router) {

  }


  homelink() {
    this.router.navigate(['/'])
  }
}
