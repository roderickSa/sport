import { ApiFootballService } from '../modules/stadium/infrastructure/services/api-football.service';
import { GetCountriesUsecase } from '../modules/stadium/usecases/get-countries/get-countries.usecase';

type Requirements = {
  apiFootballService: ApiFootballService;
};

export async function bootstrapUsecases(requirements: Requirements) {
  const getCountriesUsecase = new GetCountriesUsecase(requirements.apiFootballService);
  return {
    getCountriesUsecase,
  };
}
