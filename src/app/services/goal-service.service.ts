import { Injectable } from '@angular/core';
import { Goal } from '../entities/goal';
import { User } from '../entities/user';
import { BackendService } from './backend.service';
import { IdService } from './id.service';
import { SubGoal } from '../entities/sub-goal';

@Injectable({
  providedIn: 'root',
})
export class GoalServiceService {
  constructor(
    private backendService: BackendService,
    private idService: IdService
  ) {}

  /**
   * Gibt alle Ziele vom user zurück
   * @param user User von dem die Zeiel benötigt werden
   */
  public getGoalFromUser(user: User): Goal[] {
    return user.scopeList == null ? [] : user.scopeList;
  }

  /**
   * Gibt zurück zu wieviel Prozent das Ziel erreicht wurde
   * @param goal Goal von dem die Prozentzahl benötigt wird
   */
  public getPercentNumberFromGoal(goal: Goal): number {
    const numberOfSubGoals = goal.subscope.length;
    const numberOfCompletedSubGoals = goal.subscope.filter(
      (item) => item.checked
    ).length;

    if (numberOfSubGoals === 0) {
      return 0;
    } else {
      return (numberOfCompletedSubGoals / numberOfSubGoals) * 100;
    }
  }

  /**
   * Gibt zurück zu wieviel Prozent der User seine Ziele erreicht hat
   * @param user User von dem die Prozentzahl benötigt wird
   */
  public getPercentNumberFromUser(user: User): number {
    let numberOfSubGoals = 0;
    let numberOfCompletedSubGoals = 0;

    user.scopeList.forEach((goal: Goal) => {
      goal.subscope.forEach((subGoal: SubGoal) => {
        numberOfSubGoals = numberOfSubGoals + 1;
        if (subGoal.checked) {
          numberOfCompletedSubGoals = numberOfCompletedSubGoals + 1;
        }
      });
    });

    if (numberOfSubGoals === 0) {
      return 0;
    } else {
      return (numberOfCompletedSubGoals / numberOfSubGoals) * 100;
    }
  }

  /**
   * Erstellt ein neues Ziel für den User
   * @param user User für den das Ziel ist
   * @param name Zielname
   */
  public createGoal(user: User, name: string): Goal {
    const newGoal: Goal = {
      id: this.idService.getNewGoalId(user.scopeList, user),
      name,
      subscope: [],
    };

    user.scopeList.push(newGoal);
    this.backendService.updateUser(user);

    return newGoal;
  }

  /**
   * Erstellt ein neues Unterziel für das Ziel und den User
   * @param goal Ziel für den das Unterziel ist
   * @param user User für den das Unterziel ist
   * @param name Zielname
   */
  public createSubGoal(goal: Goal, user: User, name: string): SubGoal {
    const newGoal: SubGoal = {
      id: this.idService.getNewSubGoalId(goal.subscope, goal, user),
      name,
      checked: false,
    };

    goal.subscope.push(newGoal);
    this.backendService.updateUser(user);

    return newGoal;
  }

  /**
   * Update das Ziel auf dem Backend
   * @param goal zu aktualisierendes Ziel
   * @param user betroffener User
   */
  public modifyGoal(goal: Goal, user: User): void {
    this.backendService.updateUser(user);
  }

  /**
   * Update das Unterziel auf dem Backend
   * @param subGoal zu aktualisierendes Unterziel
   * @param user betroffener User
   */
  public modifySubGoal(subGoal: SubGoal, user: User): void {
    this.backendService.updateUser(user);
  }

  /**
   * Löscht das Ziel mit allen Unterzielen und speichert es im Backend
   * @param goal zu löschendes Ziel
   * @param user betroffener User
   */
  public deleteGoal(goal: Goal, user: User): void {
    user.scopeList = user.scopeList.filter((item) => item.id !== goal.id);
    this.backendService.updateUser(user);
  }

  /**
   * Löscht das Unterziel und speichert es im Backend
   * @param subGoal zu löschendes Unterziel
   * @param goal betroffes Ziel
   * @param user betroffener User
   */
  public deleteSubGoal(subGoal: SubGoal, goal: Goal, user: User): void {
    goal.subscope = goal.subscope.filter((item) => item.id !== subGoal.id);
    this.backendService.updateUser(user);
  }
}
