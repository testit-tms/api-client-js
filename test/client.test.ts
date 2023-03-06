import { Client } from '../src/client';
import { ClientConfig } from '../src/types/config';

jest.mock('fs', () => ({
  existsSync: () => {
    return true;
  },
  readFileSync: (path: string) => {
    switch (path) {
      case '/constructor/config':
        return JSON.stringify({
          url: 'http://file.com',
        } as ClientConfig);
      case '/cli/config':
        return JSON.stringify({
          configurationId: 'cliConfigConfigurationId',
        } as ClientConfig);
      case '/env/config':
        return JSON.stringify({
          projectId: 'envConfigProjectId',
        } as ClientConfig);
      default:
        return {};
    }
  },
}));

describe('Client test', () => {
  describe('Merge config', () => {
    const baseConfig: ClientConfig = {
      url: 'http://base.com',
      projectId: 'baseProjectId',
      configurationId: 'baseConfigurationId',
      privateToken: 'basePrivateToken',
      testRunId: 'baseTestRunId',
    };

    it('Merge url', () => {
      const mergeUrl = 'http://merge.com';
      const newConfig = Client.mergeConfig(baseConfig, { url: mergeUrl });

      expect(newConfig).toEqual({ ...baseConfig, url: mergeUrl });
    });

    it('Merge project id', () => {
      const mergeProjectId = 'mergeProjectId';
      const newConfig = Client.mergeConfig(baseConfig, {
        projectId: mergeProjectId,
      });

      expect(newConfig).toEqual({
        ...baseConfig,
        projectId: mergeProjectId,
      });
    });

    it('Merge configuration id', () => {
      const mergeConfigurationId = 'mergeConfigurationId';
      const newConfig = Client.mergeConfig(baseConfig, {
        configurationId: mergeConfigurationId,
      });

      expect(newConfig).toEqual({
        ...baseConfig,
        configurationId: mergeConfigurationId,
      });
    });

    it('Merge private token', () => {
      const mergePrivateToken = 'mergePrivateToken';
      const newConfig = Client.mergeConfig(baseConfig, {
        privateToken: mergePrivateToken,
      });

      expect(newConfig).toEqual({
        ...baseConfig,
        privateToken: mergePrivateToken,
      });
    });

    it('Merge test run id', () => {
      const mergeTestRunId = 'mergeTestRunId';
      const newConfig = Client.mergeConfig(baseConfig, {
        testRunId: mergeTestRunId,
      });

      expect(newConfig).toEqual({
        ...baseConfig,
        testRunId: mergeTestRunId,
      });
    });
  });

  describe('Configuration loading', () => {
    let oldEnv = process.env;
    let oldArgs = process.argv;

    beforeEach(() => {
      process.env = { ...oldEnv };
      process.argv = [...oldArgs];
    });

    afterAll(() => {
      process.env = oldEnv;
      process.argv = oldArgs;
    });

    const config: ClientConfig = {
      url: 'http://test.com',
      configurationId: 'configurationId',
      privateToken: 'privateToken',
      projectId: 'projectId',
      testRunId: 'testRunId',
    };
    it('Constructor config', () => {
      const client = new Client(config);

      expect(client.getConfig()).toEqual(config);
    });

    it('Constructor config with file', () => {
      const client = new Client({
        ...config,
        configFile: '/constructor/config',
      });

      expect(client.getConfig()).toEqual({ ...config, url: 'http://file.com' });
    });

    it('Env config', () => {
      const envConfig: ClientConfig = {
        url: 'http://env.com',
        configurationId: 'envConfigurationId',
        privateToken: 'envPrivateToken',
        projectId: 'envProjectId',
        testRunId: 'envTestRunId',
      };
      process.env['TESTGEAR_URL'] = envConfig.url;
      process.env['TESTGEAR_PRIVATE_TOKEN'] = envConfig.privateToken;
      process.env['TESTGEAR_PROJECT_ID'] = envConfig.projectId;
      process.env['TESTGEAR_CONFIGURATION_ID'] = envConfig.configurationId;
      process.env['TESTGEAR_TEST_RUN_ID'] = envConfig.testRunId;
      const client = new Client(config);

      expect(client.getConfig()).toEqual(envConfig);
    });

    it('Env config with file', () => {
      process.env['TESTGEAR_CONFIG_FILE'] = '/env/config';
      const client = new Client(config);

      expect(client.getConfig()).toEqual({
        ...config,
        projectId: 'envConfigProjectId',
      });
    });

    it('Cli args config', () => {
      const cliConfig: ClientConfig = {
        url: 'http://cli.com',
        configurationId: 'cliConfigurationId',
        privateToken: 'cliPrivateToken',
        projectId: 'cliProjectId',
        testRunId: 'cliTestRunId',
      };
      process.argv.push(
        `--testgearUrl=${cliConfig.url}`,
        `--testgearPrivateToken`,
        cliConfig.privateToken!,
        `--testgearProjectId=${cliConfig.projectId}`,
        `--testgearConfigurationId`,
        cliConfig.configurationId!,
        `--testgearTestRunId=${cliConfig.testRunId}`
      );
      const client = new Client(config);

      expect(client.getConfig()).toEqual(cliConfig);
    });

    it('Cli args config with config file', () => {
      process.argv.push(`--testgearConfig`, '/cli/config');

      const client = new Client(config);

      expect(client.getConfig()).toEqual({
        ...config,
        configurationId: 'cliConfigConfigurationId',
      });
    });
  });
});
