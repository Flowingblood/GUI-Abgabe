import { Component, OnInit } from '@angular/core';
import { GoalEditDialogComponent } from '../goal-edit-dialog/goal-edit-dialog.component';
import {MatDialog, MatDialogRef,} from '@angular/material/dialog';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';
import { Goal } from 'src/app/entities/goal';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  
  // Popupdialog
  goalEditDialogRef: MatDialogRef<GoalEditDialogComponent>;

  goals: Goal[];


  constructor(public goalEditDialog: MatDialog, private backendService: BackendService) { }

  ngOnInit(): void {

    this.goals = [{id: 1, name: "test", subscope:[{id: 10, name: "sub_test"}]} ,{id: 2, name: "test2"},{id: 3, name: "test3"}];
    //this.goals = this.backendService.
    /*const dialogRef = this.dialog.open(UserEditDialogComponent, {
      
    });*/

  }

  openEditDialog($event: any, goal: Goal): void{
    $event.stopPropagation();
    this.goalEditDialogRef = this.goalEditDialog.open(GoalEditDialogComponent);
    this.goalEditDialogRef.componentInstance.goal = goal;
    this.goalEditDialogRef.afterClosed().subscribe(result => {
      //TODO Update and database
    });

  }

}
