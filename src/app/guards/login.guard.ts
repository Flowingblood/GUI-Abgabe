import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  /**
   * Prüft ob der Benutzer bereits angemeldet ist,
   * falls ja wird er zu seinen Zielen umgeleiter
   */
  canActivate(): boolean {
    if (this.authorizationService.isLoggedIn()) {
      this.router.navigate([
        '/goals',
        this.authorizationService.getCurrentLoggedInUser().id,
      ]);
      return false;
    }
    return true;
  }
}
