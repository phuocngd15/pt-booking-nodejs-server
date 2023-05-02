import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { method, url, headers } = req;
  const start = Date.now();

  res.on('finish', () => {
    const { statusCode, statusMessage } = res;
    const elapsedTime = Date.now() - start;
    console.log(`${method} ${url} ${statusCode} ${statusMessage} - ${elapsedTime}ms`);
  });

  next();
};

export default loggerMiddleware;
