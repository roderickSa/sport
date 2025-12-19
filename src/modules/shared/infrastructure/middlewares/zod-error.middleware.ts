import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import {
  ValidationErrorResponse as SchemaValidationErrorResponse,
  ValidationErrorsResponse as SchemaValidationErrorsResponse,
} from '../controllers/responses/exceptions/validation-error';

export class ZodErrorMiddleware {
  constructor() {}

  public execute(error: unknown, req: Request, res: Response, next: NextFunction) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((err) => {
        return new SchemaValidationErrorResponse(err.path.join('.'), err.message);
      });

      res.status(StatusCodes.BAD_REQUEST).send(new SchemaValidationErrorsResponse(errors));

      return;
    }

    next(error);
  }
}
