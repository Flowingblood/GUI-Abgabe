import { Injectable } from '@angular/core';
import { Goal } from '../entities/goal';
import { SubGoal } from '../entities/sub-goal';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  constructor() {}

  public buildId(userId: number, goalId: number, subGoalId: number): number {
    return +(
      '1' +
      this.zeroPad(userId, 3) +
      this.zeroPad(goalId, 3) +
      this.zeroPad(subGoalId, 3)
    );
  }

  private zeroPad(num: number, places: number): string {
    return String(num).padStart(places, '0');
  }

  public getUserIdFromId(id: string): number {
    return +id.toString().substring(1, 4);
  }

  public getGoalIdFromId(id: string): number {
    return +id.toString().substring(4, 7);
  }

  public getNewUserId(a: User[]): number {
    const usedIds: number[] = a.map(
      (item) => +item.id.toString().substring(1, 4)
    );

    const userId = this.getNewId(usedIds);
    return this.buildId(userId, 0, 0);
  }

  public getNewGoalId(a: Goal[], user: User): number {
    const usedIds: number[] = a.map(
      (item) => +item.id.toString().substring(4, 7)
    );

    const userId = user.id;
    const goalId = this.getNewId(usedIds);

    return this.buildId(userId, goalId, 0);
  }

  public getNewSubGoalId(a: SubGoal[], goal: Goal, user: User): number {
    const usedIds: number[] = a.map(
      (item) => +item.id.toString().substring(7, 10)
    );

    const userId = user.id;
    const goalId = goal.id;
    const subGoalId = this.getNewId(usedIds);

    return this.buildId(userId, goalId, subGoalId);
  }

  private getNewId(usedIds: number[]): number {
    let id = 1;
    while (usedIds.findIndex((item) => item === id) !== -1) {
      id = id + 1;
    }
    return id;
  }
}
