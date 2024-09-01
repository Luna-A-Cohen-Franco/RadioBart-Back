import { Router } from 'express';
import { userRouter } from '@src/controllers/UserRouter';
import Paths from '@src/consts/Paths';

const apiRouter = Router();
apiRouter.use(Paths.Users.Base, userRouter);

export default apiRouter;
