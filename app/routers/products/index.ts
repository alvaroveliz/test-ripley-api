import express from 'express';
import ProductController from '../../controllers/ProductController';
import asyncHandler from '../../helpers/asyncHandler';

const ProductsRoutes: express.Router = express.Router();

ProductsRoutes.get('/', asyncHandler(ProductController.list));
ProductsRoutes.get('/:partNumber/show', asyncHandler(ProductController.show));

export default ProductsRoutes;
