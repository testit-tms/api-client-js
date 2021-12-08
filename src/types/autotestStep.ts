export interface AutotestStep {
  title: string;
  description?: string;
  steps?: AutotestStep[];
}
