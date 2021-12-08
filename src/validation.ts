import { z } from 'zod';
import { ClientConfig } from '.';

const configSchema = z.object({
  configurationId: z.string().uuid(),
  privateToken: z.string(),
  projectId: z.string().uuid(),
  url: z.string().url(),
  testRunId: z.string().uuid().optional(),
});

export function validateConfig(config: Partial<ClientConfig>): ClientConfig {
  return configSchema.parse(config);
}
