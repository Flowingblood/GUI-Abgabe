import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';

@Component({
  selector: 'app-goal-add-dialog',
  templateUrl: './goal-add-dialog.component.html',
  styleUrls: ['./goal-add-dialog.component.scss'],
})
export class GoalAddDialogComponent implements OnInit {
  goalName: string;

  constructor(private currDialog: MatDialogRef<GoalAddDialogComponent>) {
    this.currDialog.disableClose = true;
  }

  ngOnInit(): void {}

  handleSave(): void {
    this.currDialog.close(this.goalName);
  }

  handleAbort(): void {
    this.currDialog.close(null);
  }
}
