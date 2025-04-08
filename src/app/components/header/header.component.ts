import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private route: Router = inject(Router);
  authService = inject(AuthService)


  navigateToSignUpPage(): void {
    this.route.navigate(["/signup"]);
  }
  navigateToLoginPage(): void {
    this.route.navigate(["/login"]);
  }

  disconnect(): void {
    this.authService.clearToken()
    this.route.navigate(['/login'])

  }
}
