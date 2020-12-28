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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
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
