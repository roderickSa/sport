import { CreateStadiumController } from '../modules/stadium/infrastructure/controllers/create-stadium';

export async function bootstrapControllers() {
  const createStadiumController = new CreateStadiumController();

  return {
    createStadiumController,
  };
}
