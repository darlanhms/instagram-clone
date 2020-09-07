import { Router, Request, Response } from 'express';

import CreateUserService from '../services/Users/CreateUserService';

const UsersRouter = Router();

UsersRouter.post('/', async (req: Request, res: Response) => {
  const { username, email, password, name } = req.body;

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

export default UsersRouter;
