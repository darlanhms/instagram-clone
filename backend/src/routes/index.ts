import { Router } from 'express';

import postsRouter from './posts.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/posts', postsRouter);
router.use('/users', usersRouter);

export default router;
