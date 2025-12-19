import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Controller } from '../../../shared/infrastructure/controllers/controller';

export class CreateStadiumController implements Controller {
  constructor() {}

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(StatusCodes.OK).send();
    } catch (error) {
      next(error);
    }
  }

  async handleErrors(err: Error, req: Request, res: Response, next: NextFunction): Promise<void> {
    next(err);
  }
}
