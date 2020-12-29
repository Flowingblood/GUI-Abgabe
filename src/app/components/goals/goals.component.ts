import { Component, OnInit } from '@angular/core';
import { GoalEditDialogComponent } from '../goal-edit-dialog/goal-edit-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/entities/goal';
import { GoalAddDialogComponent } from '../goal-add-dialog/goal-add-dialog.component';
import { GoalDeleteDialogComponent } from '../goal-delete-dialog/goal-delete-dialog.component';
import { User } from 'src/app/entities/user';
import { SubGoal } from 'src/app/entities/sub-goal';
import { GoalServiceService } from '../../services/goal-service.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {

  //Momentaner User
  currentUser: User;

  // Edit Popupdialog
  editGoalDialogRef: MatDialogRef<GoalEditDialogComponent>;

  // Add Popupdialog
  addGoalDialogRef: MatDialogRef<GoalAddDialogComponent>;

  // Delete Popupdialog
  deleteGoalDialogRef: MatDialogRef<GoalDeleteDialogComponent>;

  goals: Goal[];

  /**
   * Klassen Konstruktor
   * @param goalEditDialog  GoalEditDialog
   * @param addGoalDialog  AddGoalDialog
   * @param deleteGoalDialog DeleteGoalDialog
   * @param goalService GoalService zum zugriff auf die Datenbank
   * @param userService UserService zum zugriff auf die Datenbank
   * @param route Router zum routen der komponente
   */
  constructor(
    public goalEditDialog: MatDialog,
    public addGoalDialog: MatDialog,
    public deleteGoalDialog: MatDialog,
    public goalService: GoalServiceService,
    public userService: UserService,
    private route: ActivatedRoute,
  ) { }

  //TODO
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userService.getUserByUserid(+paramMap.get('id')).then((user) => {
        this.currentUser = user;
        if (user !== null) {
          this.goals = this.goalService.getGoalFromUser(this.currentUser);
        } else {
          this.goals = [];
        }
      });
    });
  }

  /**
   * Öffnet den Ziel Bearbeiten Dialog
   * @param $event Das aufgerufene Event
   * @param goal Das Ziel zum editieren
   * @param user Der Nutzer welchem das Ziel gehört
   */
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

  /**
   * Öffnet den Ziel Hinzufüge Dialog
   * @param $event Das aufgerufene Event
   * @param user Der Nutzer welchem das Ziel gehört
   */
  openAddGoalDialog($event: any, user: User): void {
    $event.stopPropagation();
    this.addGoalDialogRef = this.goalEditDialog.open(GoalAddDialogComponent);
    this.addGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.createGoal(user, result);
      }
    });
  }

  /**
   * Öffnet den Ziel Löschen Dialog
   * @param $event Das aufgerufene Event
   * @param goal Das Ziel welches gelöscht wird
   * @param user Der Nutzer welchem das Ziel gehört
   */
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

  /**
   * Öffnet den Sub-Ziel Bearbeiten Dialog
   * @param $event Das aufgerufene Event
   * @param goal Das Ziel welches gelöscht wird
   * @param user Der Nutzer welchem das Ziel gehört
   */
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

  /**
   * Öffnet den Sub-Ziel Hinzufüge Dialog
   * @param $event Das aufgerufene Event
   * @param goal Das Ziel welches hinzugefügt wird
   * @param user Der Nutzer welchem das Ziel gehört
   */
  openAddSubGoalDialog($event: any, goal: Goal, user: User): void {
    $event.stopPropagation();
    this.addGoalDialogRef = this.goalEditDialog.open(GoalAddDialogComponent);
    this.addGoalDialogRef.afterClosed().subscribe((result) => {
      if (result !== null) {
        this.goalService.createSubGoal(goal, user, result);
      }
    });
  }

  /**
   * Öffnet den Sub-Goal Löschen Dialog
   * @param $event Das aufgerufene Event
   * @param subGoal Das Sub-Ziel welches gelöscht wird
   * @param goal Das Ziel welches dem Sub-Ziel angehört
   * @param user Der Nutzer welchem das Ziel gehörte
   */
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

  /**
   * Setzt das Sub-Goal auf den entsprechenden boolschen Wert
   * @param $event Das aufgerufene Event
   * @param subGoal Das Sub-Ziel welches den boolschen Wert bekommt
   * @param user Der Nutzer welchem das Ziel gehörte
   */
  toggleValue(
    $event: MatCheckboxChange,
    subGoal: SubGoal,
    user: User
  ): void {
    subGoal.checked = $event.checked;
    this.goalService.modifySubGoal(subGoal, user);
  }
}
