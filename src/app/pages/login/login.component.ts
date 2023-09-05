import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userService = inject(UserService);
  router = inject(Router);

  async getDataForm(form: any): Promise<void> {
    try {
      const response = await this.userService.login(form.value);
      if (response.token) {
        localStorage.setItem('token', response.token);
        window.location.href = '/dashboard';
      }
    } catch (msg: any) {
      //console.log(msg)
      alert(msg.error.message)
    }
  }
}
