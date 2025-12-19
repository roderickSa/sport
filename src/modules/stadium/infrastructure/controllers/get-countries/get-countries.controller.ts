import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller } from '../../../../shared/infrastructure/controllers/controller';
import { GetCountriesUsecase } from '../../../usecases/get-countries/get-countries.usecase';
import { GetCountriesBadRequest, GetCountriesException, GetCountriesSuccessfully } from '../../../ports/api-football/outputs/get-countries.output';
import { GetCountriesSuccessfullyResponse } from './get-countries-successfully.response';
import { GetCountriesBadRequestResponse } from './get-countries-bad-request.exception';
import { GetCountriesInternalErrorResponse } from './get-countries-internal-error.exception';

export class GetCountriesController implements Controller {
  constructor(public readonly getCountriesUsecase: GetCountriesUsecase) {}

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.getCountriesUsecase.execute();

      if (result instanceof GetCountriesSuccessfully) {
        res.status(StatusCodes.OK).send(new GetCountriesSuccessfullyResponse(result.data));
      }

      if (result instanceof GetCountriesBadRequest) {
        res.status(StatusCodes.BAD_REQUEST).send(new GetCountriesBadRequestResponse());
      }

      if (result instanceof GetCountriesException) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(new GetCountriesInternalErrorResponse());
      }
    } catch (error) {
      next(error);
    }
  }

  async handleErrors(err: Error, req: Request, res: Response, next: NextFunction): Promise<void> {
    next(err);
  }
}
