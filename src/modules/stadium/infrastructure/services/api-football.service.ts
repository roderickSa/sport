import { ApiFootballGateway } from '../../ports/api-football/api-football.gateway';
import {
  GetCountriesBadRequest,
  GetCountriesException,
  GetCountriesOutput,
  GetCountriesSuccessfully,
} from '../../ports/api-football/outputs/get-countries.output';
import { GetCountriesParams } from '../../ports/api-football/params/get-countries.params';
import { AxiosError, AxiosInstance } from 'axios';
import { CountriesListResponseSchema } from './responses/countries.response';
import { CountriesMapper } from './mappers/countries.mapper';

export class ApiFootballService implements ApiFootballGateway {
  constructor(private readonly client: AxiosInstance) {}

  async getCountries(params: GetCountriesParams): Promise<GetCountriesOutput> {
    const queryParams = `/?action=${params.action}`;
    try {
      const response = await this.client.get(queryParams, { params });

      const responseBody = CountriesListResponseSchema.parse(response.data);

      return new GetCountriesSuccessfully(CountriesMapper.toDomain(responseBody));
    } catch (error) {
      if (error instanceof AxiosError) {
        return new GetCountriesBadRequest();
      }
      return new GetCountriesException();
    }
  }
}
