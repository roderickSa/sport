import { CreateStadiumController } from '../modules/stadium/infrastructure/controllers/create-stadium';
import { GetCountriesController } from '../modules/stadium/infrastructure/controllers/get-countries/get-countries.controller';
import { GetCountriesUsecase } from '../modules/stadium/usecases/get-countries/get-countries.usecase';

interface Requirements {
  getCountriesUsecase: GetCountriesUsecase;
}

export async function bootstrapControllers(requirements: Requirements) {
  const createStadiumController = new CreateStadiumController();

  const getCountriesController = new GetCountriesController(requirements.getCountriesUsecase);

  return {
    createStadiumController,
    getCountriesController,
  };
}
