import listRoutes from "express-list-routes";
import type { Application, Router } from "express";

export const listEndpoints = (
  app: Router,
  prefix?: string
): void => {
  listRoutes(app, {
    prefix,
  });
};
