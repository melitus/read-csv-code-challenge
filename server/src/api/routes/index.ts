import { Router } from 'express';

import pricingRoutes from '../v1/pricing';

const apiRouter = Router();

apiRouter.use('/pricing', pricingRoutes);


export default apiRouter;
