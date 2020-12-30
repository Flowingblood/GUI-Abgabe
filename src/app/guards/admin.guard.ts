import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthorizationService
  ) {}

  /**
   * Prüft ob der Benutzer angemeldet ist und ob er ein Trainer ist,
   * ansonsten darf er die aufgerufene Seite nicht öffnen
   */
  canActivate(): boolean {
    if (
      this.authService.isLoggedIn() &&
      this.authService.getCurrentLoggedInUser().permission
    ) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
