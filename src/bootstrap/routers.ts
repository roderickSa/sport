import { StadiumRouter } from '../modules/stadium/infrastructure/routes/stadium';
import { CreateStadiumController } from '../modules/stadium/infrastructure/controllers/create-stadium';
import { ZodErrorMiddleware } from '../modules/shared/infrastructure/middlewares/zod-error.middleware';

type Requirements = {
  createStadiumController: CreateStadiumController;
  zodErrorMiddleware: ZodErrorMiddleware;
};

export function bootstrapRouters(requirements: Requirements) {
  const stadiumRouter = new StadiumRouter(
    requirements.createStadiumController,
    requirements.zodErrorMiddleware,
  );

  return {
    stadiumRouter,
  };
}
