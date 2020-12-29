import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss'],
})
export class UserEditDialogComponent implements OnInit {
  user: User;

  username: string;
  firstName: string;
  lastName: string;
  password: string;
  admin: boolean;

  constructor(private currDialog: MatDialogRef<UserEditDialogComponent>) {
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    currDialog.disableClose = true;
  }

  ngOnInit(): void {
    this.username = this.user.username;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.password = '';
    this.admin = this.user.permission;
  }

  handleSave(): void {
    if (this.username.length !== 0 && this.firstName.length !== 0
    && this.lastName.length !== 0) {
      this.user.username = this.username;
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.user.permission = this.admin;

      if (this.password.length !== 0) {
        this.user.password = this.password;
      }

      this.currDialog.close(this.user);
    }
  }

  handleAbort(): void {
    this.currDialog.close(null);
  }
}
