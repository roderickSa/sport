import { Country } from '../../../domain/api-football/country';
import { CountriesResponse } from '../responses/countries.response';

export class CountriesMapper {
  static toDomain(response: CountriesResponse[]): Country[] {
    return response.map(
      (country) => new Country(country.country_id, country.country_name, country.country_logo),
    );
  }
}
