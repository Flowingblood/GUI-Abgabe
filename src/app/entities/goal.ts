import { SubGoal } from './sub-goal';
export interface Goal {
  id: number;
  name: string;
  subscope: SubGoal[];
}
