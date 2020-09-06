import { Router, Request, Response } from 'express';

const PostsRouter = Router();

PostsRouter.get('/', (req: Request, res: Response) => {
  return res.send('isto é posts');
});

export default PostsRouter;
