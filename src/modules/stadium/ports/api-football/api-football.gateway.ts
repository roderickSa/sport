import { GetCountriesOutput } from './outputs/get-countries.output';
import { GetCountriesParams } from './params/get-countries.params';

export interface ApiFootballGateway {
  getCountries(params: GetCountriesParams): Promise<GetCountriesOutput>;
}
