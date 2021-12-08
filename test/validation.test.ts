import { v4 } from 'uuid';
import { ClientConfig } from '../src/types';
import { validateConfig } from '../src/validation';

describe('Config validation test', () => {
  it('should return valid config', () => {
    const config: Partial<ClientConfig> = {
      projectId: v4(),
      configurationId: v4(),
      privateToken: 'random token',
      url: 'http://localhost:5000',
    };
    const result = validateConfig(config);
    expect(result).toEqual(config);
  });

  it('should return valid config with test run id', () => {
    const config: Partial<ClientConfig> = {
      projectId: v4(),
      configurationId: v4(),
      privateToken: 'random token',
      url: 'http://localhost:5000',
      testRunId: v4(),
    };
    const result = validateConfig(config);
    expect(result).toEqual(config);
  });

  it('should thrown without project id', () => {
    const config: Partial<ClientConfig> = {
      configurationId: v4(),
      privateToken: 'random token',
      url: 'http://localhost:5000',
      testRunId: v4(),
    };
    expect(() => validateConfig(config)).toThrow();
  });

  it('should thrown without configuration id', () => {
    const config: Partial<ClientConfig> = {
      projectId: v4(),
      privateToken: 'random token',
      url: 'http://localhost:5000',
      testRunId: v4(),
    };
    expect(() => validateConfig(config)).toThrow();
  });

  it('should thrown without token', () => {
    const config: Partial<ClientConfig> = {
      projectId: v4(),
      configurationId: v4(),
      url: 'http://localhost:5000',
      testRunId: v4(),
    };
    expect(() => validateConfig(config)).toThrow();
  });

  it('should thrown without url', () => {
    const config: Partial<ClientConfig> = {
      projectId: v4(),
      configurationId: v4(),
      privateToken: 'random token',
      testRunId: v4(),
    };
    expect(() => validateConfig(config)).toThrow();
  });
});
