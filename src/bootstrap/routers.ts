import { StadiumRouter } from '../modules/stadium/infrastructure/routes/stadium';
import { CreateStadiumController } from '../modules/stadium/infrastructure/controllers/create-stadium';
import { ZodErrorMiddleware } from '../modules/shared/infrastructure/middlewares/zod-error.middleware';
import { GetCountriesController } from '../modules/stadium/infrastructure/controllers/get-countries/get-countries.controller';
import { ApiFootballRouter } from '../modules/stadium/infrastructure/routes/api-football';

type Requirements = {
  createStadiumController: CreateStadiumController;
  getCountriesController: GetCountriesController;
  zodErrorMiddleware: ZodErrorMiddleware;
};

export function bootstrapRouters(requirements: Requirements) {
  const stadiumRouter = new StadiumRouter(
    requirements.createStadiumController,
    requirements.zodErrorMiddleware,
  );

  const apiFootballRouter = new ApiFootballRouter(
    requirements.getCountriesController,
    requirements.zodErrorMiddleware,
  );

  return {
    stadiumRouter,
    apiFootballRouter,
  };
}
