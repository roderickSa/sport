import { AxiosInstance } from 'axios';
import { ApiFootballService } from '../modules/stadium/infrastructure/services/api-football.service';

type Requirements = {
  apiFootballClient: AxiosInstance;
};

export function bootstrapServices(requirements: Requirements) {
  const apiFootballService = new ApiFootballService(requirements.apiFootballClient);
  return {
    apiFootballService,
  };
}
