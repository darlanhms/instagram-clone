import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import tokenConfig from '../../config/token';

import User from '../../models/User';

import AppError from '../../errors/AppError';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('E-mail inválido', 401);
    }

    const passwordMatches = await compare(password, user.password as string);

    if (!passwordMatches) {
      throw new AppError('Senha inválida', 401);
    }

    const { expiresIn, secret } = tokenConfig;

    if (!secret) {
      throw new AppError('Secret não encontrado', 401);
    }

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
