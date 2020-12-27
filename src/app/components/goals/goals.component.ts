import { Component, OnInit } from '@angular/core';
import { GoalEditDialogComponent } from '../goal-edit-dialog/goal-edit-dialog.component';
import {MatDialog, MatDialogRef,} from '@angular/material/dialog';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';
import { Goal } from 'src/app/entities/goal';
import { BackendService } from 'src/app/services/backend.service';
import { GoalAddDialogComponent } from '../goal-add-dialog/goal-add-dialog.component';
import { GoalDeleteDialogComponent } from '../goal-delete-dialog/goal-delete-dialog.component';
import { User } from 'src/app/entities/user';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  currentUser: User;
  
  // Edit Popupdialog
  editGoalDialogRef: MatDialogRef<GoalEditDialogComponent>;

  // Add Popupdialog
  addGoalDialogRef: MatDialogRef<GoalAddDialogComponent>;

  // Delete Popupdialog
  deleteGoalDialogRef: MatDialogRef<GoalDeleteDialogComponent>;

  goals: Goal[];


  constructor(public goalEditDialog: MatDialog, public addGoalDialog: MatDialog, public deleteGoalDialog: MatDialog,
     private backendService: BackendService, public authService: AuthorizationService) { }

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((currUser) => this.currentUser = currUser);
    
    this.goals = [{id: 1, name: "test", subscope:[{id: 10, name: "sub_test"}]} ,{id: 2, name: "test2"},{id: 3, name: "test3"}];
    //this.goals = this.backendService.
    /*const dialogRef = this.dialog.open(UserEditDialogComponent, {
      
    });*/

  }

  openEditDialog($event: any, goal: Goal): void{
    $event.stopPropagation();
    this.editGoalDialogRef = this.goalEditDialog.open(GoalEditDialogComponent);
    this.editGoalDialogRef.componentInstance.goal = goal;
    this.editGoalDialogRef.afterClosed().subscribe(result => {
      //TODO Update and database
    });
  }

  openAddGoalDialog($event: any): void{
    $event.stopPropagation();
    this.addGoalDialogRef = this.goalEditDialog.open(GoalAddDialogComponent);
    this.addGoalDialogRef.afterClosed().subscribe(result => {
      //TODO Update and database
    });

  }

  openDeleteGoalDialog($event: any, goal: Goal): void{
    $event.stopPropagation();
    this.deleteGoalDialogRef = this.goalEditDialog.open(GoalDeleteDialogComponent);
    this.deleteGoalDialogRef.componentInstance.goal = goal;
    this.deleteGoalDialogRef.afterClosed().subscribe(result => {
      //TODO Update and database
    });

  }

}
