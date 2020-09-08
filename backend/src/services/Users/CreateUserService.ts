import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';

import AppError from '../../errors/AppError';

interface Request {
  name: string;
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    username,
    email,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkEmailUsed = await usersRepository.findOne({
      where: { email },
    });

    if (checkEmailUsed) {
      throw new AppError('Endereço de e-mail já está cadastrado.');
    }

    const checkUsernameUsed = await usersRepository.findOne({
      where: { username },
    });

    if (checkUsernameUsed) {
      throw new AppError('Nome de usuário já está cadastrado.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
