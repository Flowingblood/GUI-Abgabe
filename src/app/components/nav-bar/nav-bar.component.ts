import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { PasswordEditDialogComponent } from '../password-edit-dialog/password-edit-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  currentUser: User;

  // Passwort ändern Popupdialog
  editPasswordDialogRef: MatDialogRef<PasswordEditDialogComponent>;

  constructor(private authService: AuthorizationService, public passwordEditDialog: MatDialog,) {
    authService
      .getLoggedInUser()
      .subscribe((currUser) => (this.currentUser = currUser));
  }

  ngOnInit(): void {}

  handleLogOut(): void {
    this.authService.logout();
  }


  handlePasswordChange($event: any): void {
    $event.stopPropagation();
    this.editPasswordDialogRef = this.passwordEditDialog.open(PasswordEditDialogComponent);
    this.editPasswordDialogRef.afterClosed().subscribe((result) => {

    });
  }

}
