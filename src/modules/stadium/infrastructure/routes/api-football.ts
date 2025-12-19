import { Request, Router, Response, NextFunction } from 'express';
import { ZodErrorMiddleware } from '../../../shared/infrastructure/middlewares/zod-error.middleware';
import { GetCountriesController } from '../controllers/get-countries/get-countries.controller';

export class ApiFootballRouter {
  public router = Router();

  constructor(
    private readonly getCountriesController: GetCountriesController,
    private readonly zodErrorMiddleware: ZodErrorMiddleware,
  ) {
    this.router.get(
      '/',
      (req: Request, res: Response, next: NextFunction) =>
        this.getCountriesController.execute(req, res, next),
      (err: Error, req: Request, res: Response, next: NextFunction) =>
        this.getCountriesController.handleErrors(err, req, res, next),
      (err: Error, req: Request, res: Response, next: NextFunction) =>
        this.zodErrorMiddleware.execute(err, req, res, next),
    );
  }
}
