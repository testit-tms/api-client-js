import {
  Attachment,
  Autotest,
  AutotestPost,
  AutotestPut,
  AutotestQuery,
  AutotestResultsForTestRun,
  ClientConfig,
  TestRunGet,
  TestRunPost,
  WorkItemId,
} from '.';

export interface IClient {
  checkConnection(): Promise<void>;
  getAutotest(query: AutotestQuery): Promise<Autotest[]>;
  createAutotest(autotest: AutotestPost): Promise<Autotest>;
  updateAutotest(autotest: AutotestPut): Promise<void>;
  linkToWorkItem(autotestId: string, workItem: WorkItemId): Promise<void>;
  createTestRun(testRun: TestRunPost): Promise<TestRunGet>;
  startTestRun(testRunId: string): Promise<void>;
  loadTestRunResults(
    testRunId: string,
    results: AutotestResultsForTestRun[]
  ): Promise<string[]>;
  completeTestRun(testRunId: string): Promise<void>;
  getConfig(): ClientConfig;
  loadAttachment(fileName: string): Promise<Attachment>;
}
