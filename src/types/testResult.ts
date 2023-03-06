import { Attachment } from './attachment';
import { AutotestGet } from './autotest';
import { Configuration } from './configuration';
import { Link } from './link';
import { OutcomeType } from './outcome';
import { Parameters } from './parameters';
import { Properties } from './properties';
import { TestPointShort } from './testPoint';

export interface TestResultGet {
  configuration?: Configuration;
  autoTest?: AutotestGet;
  is?: string;
  configurationId?: string;
  workItemVersionId?: string;
  autoTestId?: string;
  message?: string;
  traces?: string;
  startedOn?: string;
  completedOn?: string;
  runByUserId?: string;
  stoppedByUserId?: string;
  testPointId?: string;
  testPoint?: TestPointShort;
  testRunId?: string;
  outcome?: OutcomeType;
  comment?: string;
  links?: Link[];
  attachments?: Attachment[];
  parameters?: Parameters;
  properties?: Properties;
}
