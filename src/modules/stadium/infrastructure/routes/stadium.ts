import { Request, Router, Response, NextFunction } from 'express';
import { ZodErrorMiddleware } from '../../../shared/infrastructure/middlewares/zod-error.middleware';
import { CreateStadiumController } from '../controllers/create-stadium';

export class StadiumRouter {
  public router = Router();

  constructor(
    private readonly createStadiumController: CreateStadiumController,
    private readonly zodErrorMiddleware: ZodErrorMiddleware,
  ) {
    this.router.get(
      '/',
      (req: Request, res: Response, next: NextFunction) =>
        this.createStadiumController.execute(req, res, next),
      (err: Error, req: Request, res: Response, next: NextFunction) =>
        this.createStadiumController.handleErrors(err, req, res, next),
      (err: Error, req: Request, res: Response, next: NextFunction) =>
        this.zodErrorMiddleware.execute(err, req, res, next),
    );
  }
}
