import { Component, OnInit } from '@angular/core';
import { GoalEditDialogComponent } from '../goal-edit-dialog/goal-edit-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';
import { Goal } from 'src/app/entities/goal';
import { BackendService } from 'src/app/services/backend.service';
import { GoalAddDialogComponent } from '../goal-add-dialog/goal-add-dialog.component';
import { GoalDeleteDialogComponent } from '../goal-delete-dialog/goal-delete-dialog.component';
import { User } from 'src/app/entities/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { SubGoal } from 'src/app/entities/sub-goal';
import { GoalServiceService } from '../../services/goal-service.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
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

  constructor(
    public goalEditDialog: MatDialog,
    public addGoalDialog: MatDialog,
    public deleteGoalDialog: MatDialog,
    private goalService: GoalServiceService,
    public authService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((currUser) => {
      this.currentUser = currUser;
      if (currUser !== null) {
        this.goals = this.goalService.getGoalFromUser(this.currentUser);
      } else {
        this.goals = [];
      }
    });
  }

  // TODO User ebenfalls als Argument
  openEditGoalDialog($event: any, goal: Goal, user: User): void {
    $event.stopPropagation();
    this.editGoalDialogRef = this.goalEditDialog.open(GoalEditDialogComponent);
    this.editGoalDialogRef.componentInstance.goal = goal;
    this.editGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.modifyGoal(result, user);
      }
    });
  }

  openAddGoalDialog($event: any, user: User): void {
    $event.stopPropagation();
    this.addGoalDialogRef = this.goalEditDialog.open(GoalAddDialogComponent);
    this.addGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.createGoal(user, result);
      }
    });
  }

  openDeleteGoalDialog($event: any, goal: Goal, user: User): void {
    $event.stopPropagation();
    this.deleteGoalDialogRef = this.goalEditDialog.open(
      GoalDeleteDialogComponent
    );
    this.deleteGoalDialogRef.componentInstance.goal = goal;
    this.deleteGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.deleteGoal(result, user);
        this.goals = this.goalService.getGoalFromUser(this.currentUser);
      }
    });
  }

  openEditSubGoalDialog($event: any, goal: SubGoal, user: User): void {
    $event.stopPropagation();
    this.editGoalDialogRef = this.goalEditDialog.open(GoalEditDialogComponent);
    this.editGoalDialogRef.componentInstance.goal = goal;
    this.editGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.modifySubGoal(result, user);
      }
    });
  }

  openAddSubGoalDialog($event: any, goal: Goal, user: User): void {
    console.log('a:', user);
    $event.stopPropagation();
    this.addGoalDialogRef = this.goalEditDialog.open(GoalAddDialogComponent);
    this.addGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.createSubGoal(goal, user, result);
      }
    });
  }

  openDeleteSubGoalDialog(
    $event: any,
    subGoal: SubGoal,
    goal: Goal,
    user: User
  ): void {
    $event.stopPropagation();
    this.deleteGoalDialogRef = this.goalEditDialog.open(
      GoalDeleteDialogComponent
    );
    this.deleteGoalDialogRef.componentInstance.goal = subGoal;
    this.deleteGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.deleteSubGoal(result, goal, user);
        this.goals = this.goalService.getGoalFromUser(this.currentUser);
      }
    });
  }

  public toggleValue(
    $event: MatCheckboxChange,
    subGoal: SubGoal,
    user: User
  ): void {
    subGoal.checked = $event.checked;
    this.goalService.modifySubGoal(subGoal, user);
  }
}
