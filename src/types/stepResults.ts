import { AttachmentPut } from './attachment';
import { OutcomeType } from './outcome';
import { Parameters } from './parameters';

export interface AttachmentPutModelAutotestStepResults {
  title?: string;
  description?: string;
  startedOn?: string;
  completedOn?: string;
  duration?: number;
  outcome?: OutcomeType;
  stepResults?: AttachmentPutModelAutotestStepResults[];
  attachments?: AttachmentPut[];
  parameters?: Parameters;
}
