import express from 'express';
import ProductsRoutes from './products';

const apiRouter: express.Router = express.Router();

apiRouter.get('/', (req, res, next) => {
    res.send('API OK');
    next();
});

apiRouter.use('/products', ProductsRoutes);

export default apiRouter;
