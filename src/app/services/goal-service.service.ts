import { Injectable } from '@angular/core';
import { Goal } from '../entities/goal';
import { User } from '../entities/user';
import { BackendService } from './backend.service';
import { IdService } from './id.service';

@Injectable({
  providedIn: 'root',
})
export class GoalServiceService {
  constructor(private backendService: BackendService, private idService: IdService) {}

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
}
