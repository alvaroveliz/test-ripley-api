import redis, { RedisClient } from 'redis';

const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;

const client: RedisClient = redis.createClient(REDIS_PORT);

let isServerAlive: boolean;

client.on('error', (error: any) => {
    console.error({ error });
    isServerAlive = false;
});

client.on('ready', () => {
    console.log('server ready');
    isServerAlive = true;
});

export const redisClient = {
    setex(key: string, seconds: number, value: string) {
        if (!isServerAlive) return;
        client.setex(key, seconds, value);
    },
    get(key: string) {
        return new Promise((resolve, reject) => {
            if (!isServerAlive) return reject('Disconnected from redis-server');

            client.get(key, (err: any, data: any) => {
                if (err) return reject(err);

                return resolve(data);
            });
        });
    },
};
