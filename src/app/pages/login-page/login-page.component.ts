import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { LoginFormComponentComponent } from "../../components/login-form-component/login-form-component.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponentComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
