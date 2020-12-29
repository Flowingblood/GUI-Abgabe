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

  public getGoalFromUser(user: User): Goal[] {
    return user.scopeList == null ? [] : user.scopeList;
  }

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

  public modifyGoal(goal: Goal, user: User): void {
    this.backendService.updateUser(user);
  }

  public modifySubGoal(subGoal: SubGoal, user: User): void {
    this.backendService.updateUser(user);
  }

  public deleteGoal(goal: Goal, user: User): void {
    user.scopeList = user.scopeList.filter((item) => item.id !== goal.id);
    this.backendService.updateUser(user);
  }

  public deleteSubGoal(subGoal: SubGoal, goal: Goal, user: User): void {
    goal.subscope = goal.subscope.filter((item) => item.id !== subGoal.id);
    this.backendService.updateUser(user);
  }
}
