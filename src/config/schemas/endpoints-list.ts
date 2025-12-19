import z from 'zod';

export const EndpointSchema = z.object({
  url: z.string(),
  timeout: z.number(),
  apiKey: z.string().optional(),
});

export const EndpointsListSchema = z.object({
  apiFootball: EndpointSchema,
});
