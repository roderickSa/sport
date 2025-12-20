import { CreateStadiumController } from '../modules/stadium/infrastructure/controllers/create-stadium';
import { GetCountriesController } from '../modules/stadium/infrastructure/controllers/get-countries/get-countries.controller';
import { GetCountriesUsecase } from '../modules/stadium/usecases/get-countries/get-countries.usecase';
import { BaseLogger } from '../utils/logger/base-logger.interface';

interface Requirements {
  logger: BaseLogger;
  getCountriesUsecase: GetCountriesUsecase;
}

export async function bootstrapControllers(requirements: Requirements) {
  const createStadiumController = new CreateStadiumController();

  const getCountriesController = new GetCountriesController(
    requirements.logger,
    requirements.getCountriesUsecase,
  );

  return {
    createStadiumController,
    getCountriesController,
  };
}
