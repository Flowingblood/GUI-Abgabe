export interface Goal {
  id: number;
  name: string;
  subscope?: Goal[];
}
