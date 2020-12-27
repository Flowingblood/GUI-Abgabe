import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-goal-add-dialog',
  templateUrl: './goal-add-dialog.component.html',
  styleUrls: ['./goal-add-dialog.component.scss']
})
export class GoalAddDialogComponent implements OnInit {

  constructor(private currDialog: MatDialogRef<GoalAddDialogComponent>) { 
    this.currDialog.disableClose = true;
  }

  ngOnInit(): void {
  }

  handleSave(): void {
    //TODO
  }

  handleAbort(): void {
    this.currDialog.close();
  }

}
