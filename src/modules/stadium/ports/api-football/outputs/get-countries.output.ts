import { Country } from '../../../domain/api-football/country';

export type GetCountriesOutput =
  | GetCountriesSuccessfully
  | GetCountriesBadRequest
  | GetCountriesException;

export class GetCountriesSuccessfully {
  constructor(public readonly data: Country[]) {}
}

export class GetCountriesBadRequest {}

export class GetCountriesException {}
