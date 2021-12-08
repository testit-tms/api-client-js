import { AttachmentPut } from './attachment';
import { LinkPost } from './link';
import { OutcomeType } from './outcome';
import { Parameters } from './parameters';
import { AttachmentPutModelAutotestStepResults } from './stepResults';

export interface AutotestResultsForTestRun {
  configurationId: string;
  links?: LinkPost[];
  failureReasonName?: string;
  autotestExternalId: string;
  outcome: OutcomeType;
  message?: string;
  traces?: string;
  startedOn?: string;
  completeOn?: string;
  duration?: number;
  attachments?: AttachmentPut[];
  parameters?: Parameters;
  stepResults?: AttachmentPutModelAutotestStepResults[];
  setupResults?: AttachmentPutModelAutotestStepResults[];
  teardownResults?: AttachmentPutModelAutotestStepResults[];
}
