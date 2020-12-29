import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';
import { SubGoal } from 'src/app/entities/sub-goal';

@Component({
  selector: 'app-goal-delete-dialog',
  templateUrl: './goal-delete-dialog.component.html',
  styleUrls: ['./goal-delete-dialog.component.scss'],
})
export class GoalDeleteDialogComponent implements OnInit {

  //Goal oder SubGoal Objekt für den Dialog
  goal: Goal | SubGoal;

  /**
   * Klassen Konstruktor
   * @param currDialog der momentane Dialog
   */
  constructor(private currDialog: MatDialogRef<GoalDeleteDialogComponent>) {
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    this.currDialog.disableClose = true;
  }

  ngOnInit(): void {}

  /**
   * Schließt den momentanen Dialog und gibt diesem das Ziel mit
   */
  handleDelete(): void {
    this.currDialog.close(this.goal);
  }

  /**
   * Schließt den momentanen Dialog und gibt ein null mit
   */
  handleAbort(): void {
    this.currDialog.close(null);
  }
}
