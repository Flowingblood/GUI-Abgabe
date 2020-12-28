import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';
import { SubGoal } from 'src/app/entities/sub-goal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-goal-edit-dialog',
  templateUrl: './goal-edit-dialog.component.html',
  styleUrls: ['./goal-edit-dialog.component.scss'],
})
export class GoalEditDialogComponent implements OnInit {
  goal: Goal | SubGoal;

  goalName: string;

  constructor(private currDialog: MatDialogRef<GoalEditDialogComponent>) {
    currDialog.disableClose = true;
  }

  ngOnInit(): void {
    this.goalName = this.goal.name;
  }

  handleSave(): void {
    this.goal.name = this.goalName;
    this.currDialog.close(this.goal);
  }

  handleAbort(): void {
    this.currDialog.close(null);
  }
}
