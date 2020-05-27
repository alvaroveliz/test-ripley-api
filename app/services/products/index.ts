import config from 'config';
import fetch from 'node-fetch';
import RedisService from '../redis';

const services: any = config.get('services');
const redisConfig: any = config.get('redis');
const requestUrl: string = `${services.simple.endpoint}`;
const redisService = new RedisService();

class ProductsService {
    public async getList() {
        const cache = await redisService.getCache(`${redisConfig.key}-list`);
        if (cache) return cache;

        const partNumbers = services.simple.partNumbers.join(',');
        const productsUrl = `${requestUrl}products?partNumbers=${partNumbers}`;
        const result = await fetch(productsUrl);
        const products = await result.json();

        redisService.setCache(`${redisConfig.key}-list`, product);

        return products;
    }

    public async getProduct(partNumber: string) {
        const cache = await redisService.getCache(`${redisConfig.key}-${partNumber}`);
        if (cache) return cache;

        const partNumbers = services.simple.partNumbers.join(',');
        const productsUrl = `${requestUrl}products/${partNumber}`;
        const result = await fetch(productsUrl);
        const product = await result.json();

        redisService.setCache(`${redisConfig.key}-${partNumber}`, product);

        return product;
    }
}

export default ProductsService;
