import { z } from 'zod';
import { ServerOptionsSchema } from './schemas/server-options';
import { LoggerOptionsSchema } from './schemas/logger-options';
import { EndpointsListSchema } from './schemas/endpoints-list';

export const AppConfigSchema = z.object({
  server: ServerOptionsSchema.required(),
  logger: LoggerOptionsSchema.optional(),
  endpoints: EndpointsListSchema.optional(),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;
