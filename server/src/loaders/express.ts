import { initializeMiddlewares } from '../middlewares';
import installApiEndpoints from '../api/routes';

export default (app) => {
  app.set('trust proxy', true);
  app.disable('x-powered-by');
  initializeMiddlewares(app);

  app.use('/v1/api', installApiEndpoints);

  return app;
};
