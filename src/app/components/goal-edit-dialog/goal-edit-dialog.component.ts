import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';
import { SubGoal } from 'src/app/entities/sub-goal';

@Component({
  selector: 'app-goal-edit-dialog',
  templateUrl: './goal-edit-dialog.component.html',
  styleUrls: ['./goal-edit-dialog.component.scss'],
})
export class GoalEditDialogComponent implements OnInit {

  //Goal oder SubGoal Objekt für den Dialog
  goal: Goal | SubGoal;

  //Zielname
  goalName: string;

  /**
   * Klassen Konstruktor
   * @param currDialog der momentane Dialog
   */
  constructor(private currDialog: MatDialogRef<GoalEditDialogComponent>) {
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    currDialog.disableClose = true;
  }
  /**
   * Initialisiert den Zielnamen
   */
  ngOnInit(): void {
    this.goalName = this.goal.name;
  }

  /**
   * Schließt den momentanen Dialog wenn etwas eingegeben wurde und gibt diesem das Zielname mit
   */
  handleSave(): void {
    if(this.goalName.length >0){
      this.goal.name = this.goalName;
      this.currDialog.close(this.goalName);
    }
  }

  /**
   * Schließt den momentanen Dialog und gibt ein null mit
   */
  handleAbort(): void {
    this.currDialog.close(null);
  }
}
