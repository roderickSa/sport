import http from 'node:http';
import { bootstrapMiddlewares } from './middlewares';
import { bootstrapControllers } from './controllers';
import { bootstrapRouters } from './routers';
import { bootstrapHttpServer } from './http';
import { bootstrapUsecases } from './usecases';
import { BootstrapAppConfig } from './app-config';
import { createApiFootballHttpClient } from './http-clients';
import { bootstrapServices } from './services';

export async function bootstrap(): Promise<http.Server> {
  const config = BootstrapAppConfig.get();

  const apiFootballClient = createApiFootballHttpClient(config);

  const services = bootstrapServices({ apiFootballClient });

  const middlewares = bootstrapMiddlewares();

  const usecases = await bootstrapUsecases(services);

  const controllers = await bootstrapControllers(usecases);

  const routers = bootstrapRouters({
    createStadiumController: controllers.createStadiumController,
    getCountriesController: controllers.getCountriesController,
    zodErrorMiddleware: middlewares.zodErrorMiddleware,
  });

  const httpServer = bootstrapHttpServer(routers.stadiumRouter, routers.apiFootballRouter);

  return httpServer.server;
}
