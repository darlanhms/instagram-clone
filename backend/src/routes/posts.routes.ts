import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import userAuthenticated from '../middlewares/userAuthenticated';
import AppError from '../errors/AppError';
import Post from '../models/Post';

const PostsRouter = Router();

PostsRouter.use(userAuthenticated);

PostsRouter.get('/', async (req: Request, res: Response) => {
  const PostRespository = getRepository(Post);

  const posts = await PostRespository.find();

  return res.json(posts);
});

PostsRouter.post('/', async (req: Request, res: Response) => {
  const { user_id, description } = req.body;
  const PostRespository = getRepository(Post);

  if (!user_id || !description) {
    throw new AppError('Falta informações', 422);
  }

  const post = PostRespository.create({
    user_id,
    description,
  });

  await PostRespository.save(post);

  return res.json(post);
});

export default PostsRouter;
