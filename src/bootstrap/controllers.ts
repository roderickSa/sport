import { CreateStadiumController } from '../modules/stadium/infrastructure/controllers/create-stadium';

type Requirements = {};

export async function bootstrapControllers(requirements: Requirements) {
  const createStadiumController = new CreateStadiumController();

  return {
    createStadiumController,
  };
}
