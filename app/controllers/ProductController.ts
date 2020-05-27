import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/products';

const productsService = new ProductsService();

const ProductController = {
    list: async (req: Request, res: Response, next: NextFunction) => {
        const products = await productsService.getList();
        res.send(products);
        next();
    },
    show: async (req: Request, res: Response, next: NextFunction) => {
        const product = await productsService.getProduct(req.params.partNumber);
        res.send(product);
        next();
    },
};

export default ProductController;
