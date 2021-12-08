import axios, { AxiosInstance, AxiosResponse } from 'axios';
import minimist from 'minimist';
import {
  Attachment,
  Autotest,
  AutotestPost,
  AutotestPut,
  AutotestQuery,
  AutotestResultsForTestRun,
  ClientConfig,
  ClientConfigWithFile,
  IClient,
  TestRunGet,
  TestRunPost,
  WorkItemId,
} from './types';
import { existsSync, readFileSync } from 'fs';
import FormData from 'form-data';
import { basename } from 'path';
import { validateConfig } from './validation';

export class Client implements IClient {
  private readonly axios: AxiosInstance;
  private config: ClientConfig;

  constructor(config: Partial<ClientConfigWithFile>) {
    const { configFile, ...restConfig } = config;
    let finalConfig = restConfig;
    if (configFile) {
      finalConfig = Client.mergeConfig(
        finalConfig,
        this.readConfigFile(configFile)
      );
    }
    finalConfig = Client.mergeConfig(finalConfig, this.readEnvConfig());
    finalConfig = Client.mergeConfig(finalConfig, this.readCliConfig());
    this.config = validateConfig(finalConfig);
    const baseURL = new URL('/api/v2', this.config.url).toString();
    this.axios = axios.create({
      baseURL,
      headers: {
        Authorization: `PrivateToken ${this.config.privateToken}`,
      },
    });
  }

  async checkConnection() {
    try {
      await axios.get(new URL('version.json', this.config.url).toString());
    } catch (err) {
      throw new Error('Cannot connect to TestIt');
    }
  }

  // TODO: add query object
  async getAutotest(query: AutotestQuery): Promise<Autotest[]> {
    const params = new URLSearchParams();
    Object.keys(query).forEach((key) => {
      const value = query[key as keyof AutotestQuery];
      if (value === undefined) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else {
        params.append(key, value.toString());
      }
    });
    return this.axios
      .get(`/autoTests?${params.toString()}`)
      .then((res) => res.data);
  }

  async createAutotest(autotest: AutotestPost): Promise<Autotest> {
    return this.axios.post('/autoTests', autotest).then((res) => res.data);
  }

  async updateAutotest(autotest: AutotestPut): Promise<void> {
    return this.axios.put('/autoTests', autotest);
  }

  async linkToWorkItem(
    autotestId: string,
    workItem: WorkItemId
  ): Promise<void> {
    return this.axios.post(`/autoTests/${autotestId}/workItems`, workItem);
  }

  async createTestRun(testRun: TestRunPost): Promise<TestRunGet> {
    return this.axios
      .post('/testRuns', testRun)
      .then((res) => res.data as TestRunGet);
  }

  async startTestRun(testRunId: string): Promise<void> {
    return this.axios.post(`/testRuns/${testRunId}/start`);
  }

  async loadTestRunResults(
    testRunId: string,
    results: AutotestResultsForTestRun[]
  ): Promise<string[]> {
    return await this.axios
      .post<AutotestResultsForTestRun[], AxiosResponse<string[]>>(
        `/testRuns/${testRunId}/testResults`,
        results
      )
      .then((res) => res.data);
  }

  async completeTestRun(testRunId: string): Promise<void> {
    return this.axios.post(`/testRuns/${testRunId}/complete`);
  }

  getConfig(): ClientConfig {
    return this.config;
  }

  async loadAttachment(filePath: string): Promise<Attachment> {
    const form = new FormData();
    form.append('file', readFileSync(filePath), basename(filePath));
    return this.axios
      .post<FormData, AxiosResponse<Attachment>>('/Attachments', form, {
        headers: form.getHeaders(),
      })
      .then((res) => res.data);
  }

  private readCliConfig(): Partial<ClientConfig> {
    const args = minimist(process.argv.slice(2));
    let config = {};
    if (args['testitConfig']) {
      config = this.readConfigFile(args['testitConfig']);
    }
    return Client.mergeConfig(config, {
      url: args['testitUrl'],
      privateToken: args['testitPrivateToken'],
      projectId: args['testitProjectId'],
      configurationId: args['testitConfigurationId'],
      testRunId: args['testitTestRunId'],
    });
  }

  private readEnvConfig(): Partial<ClientConfig> {
    let config = {};
    if (process.env['TESTIT_CONFIG_FILE']) {
      config = this.readConfigFile(process.env['TESTIT_CONFIG_FILE']);
    }
    return Client.mergeConfig(config, {
      url: process.env['TESTIT_URL'],
      privateToken: process.env['TESTIT_PRIVATE_TOKEN'],
      projectId: process.env['TESTIT_PROJECT_ID'],
      configurationId: process.env['TESTIT_CONFIGURATION_ID'],
      testRunId: process.env['TESTIT_TEST_RUN_ID'],
    });
  }

  private readConfigFile(path: string): Partial<ClientConfig> {
    if (!existsSync(path)) {
      throw new Error('Config file not found');
    }
    const config = JSON.parse(
      readFileSync(path, { encoding: 'utf8' })
    ) as Partial<ClientConfig>;
    if (config.privateToken) {
      console.warn('Private token is in config file, it is not secure');
    }
    return config;
  }

  static mergeConfig(
    oldConfig: Partial<ClientConfig>,
    newConfig: Partial<ClientConfig>
  ): Partial<ClientConfig> {
    return {
      url: newConfig.url ?? oldConfig.url,
      privateToken: newConfig.privateToken ?? oldConfig.privateToken,
      projectId: newConfig.projectId ?? oldConfig.projectId,
      configurationId: newConfig.configurationId ?? oldConfig.configurationId,
      testRunId: newConfig.testRunId ?? oldConfig.testRunId,
    };
  }
}
