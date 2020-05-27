import config from 'config';
import { redisClient } from '../../clients/redisClient';

const { cache_duration_seconds } = config.get('redis');

interface IRedisService {
    getCache: (key: string) => Promise<any>;
    setCache: (key: string, data: any) => void;
}

class RedisService implements IRedisService {
    public async getCache(key: string) {
        let redisResponse;
        try {
            redisResponse = await redisClient.get(key);
        } catch (error) {
            return false;
        }

        return typeof redisResponse === 'string' ? JSON.parse(redisResponse) : redisResponse;
    }

    public setCache(key: string, data: any) {
        redisClient.setex(key, cache_duration_seconds, JSON.stringify(data));
    }
}

export default RedisService;
