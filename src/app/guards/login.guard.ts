import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  console.log('pasa por el guard');
  if (localStorage.getItem('token')) {
    return true;
  } else {
    alert('No tienes permiso para acceder a esta ruta')
    router.navigate(['/login'])
    return false;

  }
};

