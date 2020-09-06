import 'reflect-metadata';

import Express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';

import './database';
import AppError from './errors/AppError';

const app = Express();

app.use(Express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statuscode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.get('/', (req: Request, res: Response) => res.send(new Date()));

export default app;
