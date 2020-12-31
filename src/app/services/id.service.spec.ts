import { TestBed } from '@angular/core/testing';
import { Goal } from '../entities/goal';
import { User } from '../entities/user';

import { IdService } from './id.service';
import { SubGoal } from '../entities/sub-goal';

describe('IdService', () => {
  let service: IdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build id with input ids', () => {
    const userid = 1;
    const goalid = 5;
    const subgoalid = 150;
    expect(service.buildId(userid, goalid, subgoalid)).toEqual(1001005150);
  });

  it('should return userid from id', () => {
    const userid = 1;
    const id = 1001005150;
    expect(service.getUserIdFromId(id)).toEqual(userid);
  });

  it('should return goalid from id', () => {
    const goalid = 5;
    const id = 1001005150;
    expect(service.getGoalIdFromId(id)).toEqual(goalid);
  });

  it('should create userid with 0 used ids', () => {
    const users: User[] = [];
    const id = 1001000000;
    expect(service.getNewUserId(users)).toEqual(id);
  });

  it('should create userid with 1 used id', () => {
    const users: User[] = [
      {
        id: 1001000000,
        username: null,
        firstName: null,
        lastName: null,
        password: null,
        permission: false,
        scopeList: [],
      },
    ];
    const id = 1002000000;
    expect(service.getNewUserId(users)).toEqual(id);
  });

  it('should create userid with 2 used id', () => {
    const users: User[] = [
      {
        id: 1001000000,
        username: null,
        firstName: null,
        lastName: null,
        password: null,
        permission: false,
        scopeList: [],
      },
      {
        id: 1002000000,
        username: null,
        firstName: null,
        lastName: null,
        password: null,
        permission: false,
        scopeList: [],
      },
    ];
    const id = 1003000000;
    expect(service.getNewUserId(users)).toEqual(id);
  });

  it('should create goalid with 0 used id', () => {
    const user: User = {
      id: 1001000000,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      permission: false,
      scopeList: [],
    };

    const goals: Goal[] = [];
    const id = 1001001000;
    expect(service.getNewGoalId(goals, user)).toEqual(id);
  });

  it('should create goalid with 1 used id', () => {
    const user: User = {
      id: 1001000000,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      permission: false,
      scopeList: [],
    };

    const goals: Goal[] = [
      {
        id: 1001001000,
        name: 'Testing',
        subscope: [],
      },
    ];
    const id = 1001002000;
    expect(service.getNewGoalId(goals, user)).toEqual(id);
  });

  it('should create goalid with 1 used id', () => {
    const user: User = {
      id: 1001000000,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      permission: false,
      scopeList: [],
    };

    const goals: Goal[] = [
      {
        id: 1001001000,
        name: 'Testing',
        subscope: [],
      },
      {
        id: 1001002000,
        name: 'Testing2',
        subscope: [],
      },
    ];
    const id = 1001003000;
    expect(service.getNewGoalId(goals, user)).toEqual(id);
  });

  it('should create subgoalid with 0 used id', () => {
    const user: User = {
      id: 1001000000,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      permission: false,
      scopeList: [],
    };

    const goal: Goal = {
      id: 1001002000,
      name: 'Testing',
      subscope: [],
    };
    const subGoal: SubGoal[] = [];
    const id = 1001002001;
    expect(service.getNewSubGoalId(subGoal, goal, user)).toEqual(id);
  });

  it('should create subgoalid with 1 used id', () => {
    const user: User = {
      id: 1001000000,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      permission: false,
      scopeList: [],
    };

    const goal: Goal = {
      id: 1001002000,
      name: 'Testing',
      subscope: [],
    };

    const subGoal: SubGoal[] = [
      {
        id: 1001002001,
        name: 'SubTest',
        checked: false,
      },
    ];

    const id = 1001002002;
    expect(service.getNewSubGoalId(subGoal, goal, user)).toEqual(id);
  });

  it('should create subgoalid with 2 used id', () => {
    const user: User = {
      id: 1001000000,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      permission: false,
      scopeList: [],
    };

    const goal: Goal = {
      id: 1001002000,
      name: 'Testing',
      subscope: [],
    };

    const subGoal: SubGoal[] = [
      {
        id: 1001002001,
        name: 'SubTest',
        checked: false,
      },
      {
        id: 1001002002,
        name: 'SubTest',
        checked: false,
      },
    ];

    const id = 1001002003;
    expect(service.getNewSubGoalId(subGoal, goal, user)).toEqual(id);
  });
});
