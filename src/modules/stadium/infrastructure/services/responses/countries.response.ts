import { z } from 'zod';

export const CountriesResponseSchema = z.object({
  country_id: z.string(),
  country_name: z.string(),
  country_logo: z.string(),
});

export const CountriesListResponseSchema = z.array(CountriesResponseSchema);

export type CountriesResponse = z.infer<typeof CountriesResponseSchema>;
//export type CountriesListResponse = z.infer<typeof CountriesListResponseSchema>;
