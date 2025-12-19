import { ErrorResponse } from '../../../../shared/infrastructure/controllers/responses/error-response';

export class GetCountriesBadRequestResponse extends ErrorResponse {
  static readonly CODE = 'GetCountriesBadRequest';
  static readonly MESSAGE = 'The countries request failed.';
  constructor() {
    super(GetCountriesBadRequestResponse.CODE, GetCountriesBadRequestResponse.MESSAGE);
  }
}
