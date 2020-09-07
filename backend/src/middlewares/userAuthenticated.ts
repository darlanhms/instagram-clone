import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import TokenConfig from '../config/token';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function userAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const userToken = req.headers.authorization;

  if (!userToken) {
    throw new AppError('Token não informado', 401);
  }

  const [, token] = userToken.split(' ');

  try {
    const decoded = verify(token, TokenConfig.secret || '');

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError('JWT Inválido', 401);
  }
}
