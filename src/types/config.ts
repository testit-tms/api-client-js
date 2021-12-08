export interface ClientConfig {
  url: string;
  privateToken: string;
  projectId: string;
  configurationId: string;
  testRunId?: string;
}

export interface ClientConfigWithFile extends ClientConfig {
  configFile?: string;
}
