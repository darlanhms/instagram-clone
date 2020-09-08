import { Router, Request, Response } from 'express';

import CreateUserService from '../services/Users/CreateUserService';
import AuthenticateUserService from '../services/Users/AuthenticateUserService';
import AppError from '../errors/AppError';

const UsersRouter = Router();

UsersRouter.post('/', async (req: Request, res: Response) => {
  const { username, email, password, name } = req.body;

  if (!username || !email || !password || !name) {
    throw new AppError('Verifique os campos informados', 422);
  }

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    username,
    email,
    password,
    name,
  });

  delete user.password;

  return res.json(user);
});

UsersRouter.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Campos faltando', 422);
  }

  const authenticataUser = new AuthenticateUserService();

  const { user, token } = await authenticataUser.execute({
    email,
    password,
  });

  delete user.password;

  return res.json({
    user,
    token,
  });
});

export default UsersRouter;
