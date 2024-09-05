import Paths from '@src/consts/Paths';
import UserRoutes from '@src/routes/UserRoutes';
import { Router } from 'express';

export const userRouter = Router();

userRouter.post(Paths.Users.Register, UserRoutes.register)