import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.scss'],
})
export class UserAddDialogComponent implements OnInit {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  admin: boolean;

  constructor(private currDialog: MatDialogRef<UserAddDialogComponent>) {}

  ngOnInit(): void {}

  handleSave(): void {
    // TODO Check not working
    if (this.username !== '' && this.firstName !== ''
    && this.lastName !== '' && this.password !== '') {
      const user: User = {
        id: 0,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        permission: this.admin,
        scopeList: []
      };

      this.currDialog.close(user);
    }
  }

  handleAbort(): void {
    this.currDialog.close(null);
  }
}
