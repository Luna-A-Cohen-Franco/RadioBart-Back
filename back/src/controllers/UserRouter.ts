import Paths from '@src/consts/Paths';
import UserRoutes from '@src/routes/UserRoutes';
import { Router } from 'express';
import { authenticateToken } from '@src/middleware/tokenValidator';

export const userRouter = Router();

userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.get(Paths.Users.GetOne, UserRoutes.getOne);
userRouter.get(Paths.Users.GetStats, UserRoutes.getUserStats)
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, authenticateToken, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, authenticateToken, UserRoutes.delete_);