import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';
import { SubGoal } from 'src/app/entities/sub-goal';

@Component({
  selector: 'app-goal-edit-dialog',
  templateUrl: './goal-edit-dialog.component.html',
  styleUrls: ['./goal-edit-dialog.component.scss']
})
export class GoalEditDialogComponent implements OnInit {

  goal: Goal | SubGoal;

  constructor(private currDialog: MatDialogRef<GoalEditDialogComponent>) {
    currDialog.disableClose = true;
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
