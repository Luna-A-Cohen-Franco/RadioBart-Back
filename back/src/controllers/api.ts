import { Router } from 'express';
import { userRouter } from '@src/controllers/UserRouter';
import Paths from '@src/consts/Paths';
import { authRouter } from '@src/controllers/AuthRouter';
import { albumRouter } from '@src/controllers/AlbumRouter';
import { reviewRouter } from './ReviewRouter';
import { artistRouter } from './ArtistRouter';
import { commentRouter } from './CommentRouter';

const apiRouter = Router();
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Auth.Base, authRouter);
apiRouter.use(Paths.Albums.Base, albumRouter);
apiRouter.use(Paths.Reviews.Base, reviewRouter);
apiRouter.use(Paths.Artists.Base, artistRouter);
apiRouter.use(Paths.Comments.Base, commentRouter);

export default apiRouter;
