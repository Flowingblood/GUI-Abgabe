import { Injectable } from '@angular/core';
import { Goal } from '../entities/goal';
import { SubGoal } from '../entities/sub-goal';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  constructor() {}

  /**
   * Erzeugt eine Id
   * @param userId userid Teil
   * @param goalId goalid Teil
   * @param subGoalId subgoalid Teil
   */
  public buildId(userId: number, goalId: number, subGoalId: number): number {
    return +(
      '1' +
      this.zeroPad(userId, 3) +
      this.zeroPad(goalId, 3) +
      this.zeroPad(subGoalId, 3)
    );
  }

  /**
   * Gibt die übergeben Zahl mit führenden Nullen zurück
   * @param num betroffene Zahl
   * @param places Anzahl an Stellen
   */
  private zeroPad(num: number, places: number): string {
    return String(num).padStart(places, '0');
  }

  /**
   * Gibt den userid Teil von einer id zurück
   * @param id id
   */
  public getUserIdFromId(id: string | number): number {
    return +id.toString().substring(1, 4);
  }

  /**
   * Gibt den goalid Teil von einer id zurück
   * @param id id
   */
  public getGoalIdFromId(id: string | number): number {
    return +id.toString().substring(4, 7);
  }

  /**
   * Berechnet eine neue UserId anhand der bereits vergebenen Userids und gibt diese zurück
   * @param a vergebene User
   */
  public getNewUserId(a: User[]): number {
    const usedIds: number[] = a.map(
      (item) => +item.id.toString().substring(1, 4)
    );

    const userId = this.getNewId(usedIds);
    return this.buildId(userId, 0, 0);
  }

  /**
   * Berechnet eine neue Goalid anhand der bereits vergebenen Goalids und gibt diese zurück
   * @param a vergebene Goals
   * @param user User dem das Ziel gehört
   */
  public getNewGoalId(a: Goal[], user: User): number {
    const usedIds: number[] = a.map(
      (item) => +item.id.toString().substring(4, 7)
    );

    const userId = this.getUserIdFromId(user.id);
    const goalId = this.getNewId(usedIds);

    return this.buildId(userId, goalId, 0);
  }

  /**
   * Berechnet eine neue Subgoalid anhand der bereits vergebenen Subgoalids und gibt diese zurück
   * @param a vergebe subgoals
   * @param goal Ziel zu dem das Unterziel gehört
   * @param user User dem das Unterziel gehört
   */
  public getNewSubGoalId(a: SubGoal[], goal: Goal, user: User): number {
    const usedIds: number[] = a.map(
      (item) => +item.id.toString().substring(7, 10)
    );

    const userId = this.getUserIdFromId(user.id);
    const goalId = this.getGoalIdFromId(goal.id);
    const subGoalId = this.getNewId(usedIds);

    return this.buildId(userId, goalId, subGoalId);
  }

  /**
   * Suche eine freie nicht bereits vergebene Id und gibt diese zurück
   * @param usedIds vergeben Ids
   */
  private getNewId(usedIds: number[]): number {
    let id = 1;
    while (usedIds.findIndex((item) => item === id) !== -1) {
      id = id + 1;
    }
    return id;
  }
}
