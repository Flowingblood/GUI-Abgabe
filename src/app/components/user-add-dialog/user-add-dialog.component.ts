import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.scss']
})
export class UserAddDialogComponent implements OnInit {

  constructor(private currDialog: MatDialogRef<UserAddDialogComponent>) { }

  ngOnInit(): void {
  }

  handleSave(): void {
    // TODO
  }

  handleAbort(): void {
    this.currDialog.close();
  }


}
