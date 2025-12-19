import http from 'node:http';
import { bootstrapMiddlewares } from './middlewares';
import { bootstrapControllers } from './controllers';
import { bootstrapRouters } from './routers';
import { bootstrapHttpServer } from './http';

export async function bootstrap(): Promise<http.Server> {
  const middlewares = bootstrapMiddlewares();

  const controllers = await bootstrapControllers({});

  const routers = bootstrapRouters({
    createStadiumController: controllers.createStadiumController,
    zodErrorMiddleware: middlewares.zodErrorMiddleware,
  });

  const httpServer = bootstrapHttpServer(routers.stadiumRouter);

  return httpServer.server;
}
