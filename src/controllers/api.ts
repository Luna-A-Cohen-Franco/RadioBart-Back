import { Router } from 'express';
import { userRouter } from '@src/controllers/UserRouter';
import Paths from '@src/consts/Paths';
import { authRouter } from '@src/controllers/AuthRouter';

const apiRouter = Router();
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Auth.Bsae, authRouter)
export default apiRouter;
