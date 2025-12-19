import { ErrorResponse } from '../../../../shared/infrastructure/controllers/responses/error-response';

export class GetCountriesInternalErrorResponse extends ErrorResponse {
  static readonly CODE = 'GetCountriesInternalError';
  static readonly MESSAGE = 'The countries request failed.';
  constructor() {
    super(GetCountriesInternalErrorResponse.CODE, GetCountriesInternalErrorResponse.MESSAGE);
  }
}
