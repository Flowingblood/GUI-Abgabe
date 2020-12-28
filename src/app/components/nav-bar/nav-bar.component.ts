import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthorizationService) {
    authService
      .getLoggedInUser()
      .subscribe((currUser) => (this.currentUser = currUser));
  }

  ngOnInit(): void {}

  handleLogOut(): void {
    this.authService.logout();
  }
}
