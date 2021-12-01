/* eslint-disable import/prefer-default-export */
import { initCors } from './cors';

export const initializeMiddlewares = (app) => {
  initCors(app);
};
