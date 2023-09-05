import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  existToken: boolean = false;
  router = inject(Router);

  ngOnInit(): void {
    //Tengo que comprobar si alguien se ha logado para mostrar el boton de dashboard y de logout y quitar el de login.
    this.existToken = localStorage.getItem('token') ? true : false;
    if (this.existToken) {
      this.router.navigate(['/dashboard'])
    }
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.href = 'login';
  }
}
