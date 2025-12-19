import { z } from 'zod';
import { ServerOptionsSchema } from './schemas/server-options';
import { EndpointsListSchema } from './schemas/endpoints-list';

export const AppConfigSchema = z.object({
  server: ServerOptionsSchema.required(),
  endpoints: EndpointsListSchema,
});

export type AppConfig = z.infer<typeof AppConfigSchema>;
