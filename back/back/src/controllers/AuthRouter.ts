import Paths from '@src/consts/Paths';
import AuthRoutes from '@src/routes/AuthRoutes';
import { Router } from 'express';

export const authRouter = Router();

authRouter.post(
    Paths.Auth.Login,
    AuthRoutes.login,
);