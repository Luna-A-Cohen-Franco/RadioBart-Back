import Paths from "@src/consts/Paths";
import ReviewRoutes from "@src/routes/ReviewRoutes";
import { Router } from "express";
import { authenticateToken } from "@src/middleware/tokenValidator";

export const reviewRouter = Router();

reviewRouter.get(Paths.Reviews.Get, ReviewRoutes.getAll);
reviewRouter.get(Paths.Reviews.GetOne, ReviewRoutes.getOne);
reviewRouter.post(Paths.Reviews.Add, authenticateToken, ReviewRoutes.add);
reviewRouter.put(Paths.Reviews.Update, authenticateToken, ReviewRoutes.update);
reviewRouter.put(Paths.Reviews.Like, authenticateToken, ReviewRoutes.changeLikes)
reviewRouter.delete(Paths.Reviews.Delete, authenticateToken, ReviewRoutes.delete);