import { ApiFootballGateway } from '../../ports/api-football/api-football.gateway';
import { GetCountriesOutput } from '../../ports/api-football/outputs/get-countries.output';

export class GetCountriesUsecase {
  constructor(private readonly apiFootballGateway: ApiFootballGateway) {}

  async execute(): Promise<GetCountriesOutput> {
    return await this.apiFootballGateway.getCountries({ action: 'get_countries' });
  }
}
