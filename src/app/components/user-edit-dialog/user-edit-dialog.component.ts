import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {

  user: User;

  constructor(private currDialog: MatDialogRef<UserEditDialogComponent>) { }

  ngOnInit(): void {
  }

  handleSave(): void {
    //TODO
  }

  handleAbort(): void {
    this.currDialog.close();
  }

}
