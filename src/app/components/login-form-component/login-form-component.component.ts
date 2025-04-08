import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form-component.component.html',
  styleUrl: './login-form-component.component.scss'
})
export class LoginFormComponentComponent {

  errorMessage: string = ''
  user = {
    email: '',
    password: ''
  }

  #authService = inject(AuthService)
  #router = inject(Router)

  onSubmit(form: NgForm) {
    console.log(form.value)
    if (form.valid) {
      this.#authService.login(this.user.email, this.user.password).subscribe({
        next: () => this.#router.navigate(['/profil']),
        error: () => { this.errorMessage = "Email ou mot de passe incorrect." }
      })
    }
  }

}
