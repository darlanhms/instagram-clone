import { Router, Request, Response } from 'express';

const UsersRouter = Router();

UsersRouter.get('/', (req: Request, res: Response) => {
  return res.send('isto é users');
});

export default UsersRouter;
