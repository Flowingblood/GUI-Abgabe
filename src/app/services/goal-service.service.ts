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
    console.log(goal, user, name);
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
