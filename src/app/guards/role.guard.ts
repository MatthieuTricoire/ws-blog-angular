import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: (expectedRole: string) => CanActivateFn = (expectedRole) => () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isLoggedIn() && authService.getUserRole() === expectedRole) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
