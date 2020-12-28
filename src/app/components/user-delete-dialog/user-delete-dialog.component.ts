import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.scss']
})
export class UserDeleteDialogComponent implements OnInit {

  user: User;

  constructor(private currDialog: MatDialogRef<UserDeleteDialogComponent>) { 
    this.currDialog.disableClose = true;
  }
  ngOnInit(): void {
  }


  handleDelete(): void {
    //TODO
  }

  handleAbort(): void {
    this.currDialog.close();
  }

}
