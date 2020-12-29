import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-goal-add-dialog',
  templateUrl: './goal-add-dialog.component.html',
  styleUrls: ['./goal-add-dialog.component.scss'],
})
export class GoalAddDialogComponent implements OnInit {

  //Zielname
  goalName: string;

  /**
   * Klassen Konstruktor
   * @param currDialog der momentane Dialog
   */
  constructor(private currDialog: MatDialogRef<GoalAddDialogComponent>) {
    //Lässt das Dialog beim Klicken ausserhalb nicht schließen 
    this.currDialog.disableClose = true;
  }

  ngOnInit(): void {}

  /**
   * Schließt den momentanen Dialog wenn etwas eingegeben wurde und gibt diesem das Zielname mit
   */
  handleSave(): void {
    if(this.goalName.length >0){
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
