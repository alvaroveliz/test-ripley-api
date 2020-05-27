import { Request, Response, NextFunction } from 'express';

type ExpressMiddleware = (req: Request, res: Response, next: NextFunction) => any;

// Wrap a middleware with this to automatically catch errors

const asyncHandler = (expressMiddleware: ExpressMiddleware) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(expressMiddleware(req, res, next)).catch(next);
};

export default asyncHandler;
