import { Country } from '../../../domain/api-football/country';

export class GetCountriesSuccessfullyResponse {
  private readonly message = 'Countries retrieved successfully';
  constructor(public readonly data: Country[]) {}
}
