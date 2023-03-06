import { TestResultGet } from './testResult';

export type TestRunStateType =
  | 'NotStarted'
  | 'InProgress'
  | 'Stopped'
  | 'Completed';

export interface TestRunPost {
  projectId: string;
  name?: string;
}

export interface TestRunGet {
  startedOn?: string;
  completedOn?: string;
  stateName?: TestRunStateType;
  projectId?: string;
  testPlanId?: string;
  testResults?: TestResultGet[];
  createdDate?: string;
  modifiedDate?: string;
  createById?: string;
  modifiedById?: string;
  id: string;
  name: string;
}
