import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class GoalsGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthorizationService
  ) {}

  /**
   * Prüft ob der Benutzer angemeldet ist und ob er ein Trainer ist,
   * falls er ein Kunde ist, darf er nur seine eigenen Ziele öffnen.
   * Wenn er ein Trainer ist, darf er auch die Ziele von anderen Benutzern öffnen.
   * @param route zu öffnene Route
   */
  canActivate(
    route: ActivatedRouteSnapshot,
  ): boolean {
    if (this.authService.isLoggedIn()) {
      const openUserId = +route.paramMap.get('id');
      const user: User = this.authService.getCurrentLoggedInUser();
      if (openUserId === user.id || user.permission) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
