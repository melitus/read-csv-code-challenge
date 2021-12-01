import { Router } from 'express';

import {readDataFromCvsFile} from './pricing.controller';

const pricingRoutes = Router();

pricingRoutes
  .route('/csv')
  .get(readDataFromCvsFile)

export default pricingRoutes;
