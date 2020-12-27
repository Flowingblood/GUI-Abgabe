import { Goal } from './goal';
export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  scopeList: Goal[];
  permission: boolean;
}
