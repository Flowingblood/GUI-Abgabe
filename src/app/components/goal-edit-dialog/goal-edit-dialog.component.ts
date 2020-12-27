import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';

@Component({
  selector: 'app-goal-edit-dialog',
  templateUrl: './goal-edit-dialog.component.html',
  styleUrls: ['./goal-edit-dialog.component.scss']
})
export class GoalEditDialogComponent implements OnInit {

  goal: Goal;

  constructor(private currDialog: MatDialogRef<GoalEditDialogComponent>) {
    currDialog.disableClose = true;
  }

  ngOnInit(): void {

  }

  handleSave(): void {

  }

  handleAbort(): void {
    this.currDialog.close();
  }


}
