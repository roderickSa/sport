import { ZodErrorMiddleware } from '../modules/shared/infrastructure/middlewares/zod-error.middleware';

export function bootstrapMiddlewares() {
  const zodErrorMiddleware = new ZodErrorMiddleware();

  return {
    zodErrorMiddleware,
  };
}
