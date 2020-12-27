import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';
import { SubGoal } from 'src/app/entities/sub-goal';

@Component({
  selector: 'app-goal-delete-dialog',
  templateUrl: './goal-delete-dialog.component.html',
  styleUrls: ['./goal-delete-dialog.component.scss']
})
export class GoalDeleteDialogComponent implements OnInit {

  goal: Goal | SubGoal;

  constructor(private currDialog: MatDialogRef<GoalDeleteDialogComponent>) { 
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
