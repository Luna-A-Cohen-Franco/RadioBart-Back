import Paths from "@src/consts/Paths";
import ReviewRoutes from "@src/routes/ReviewRoutes";
import { Router } from "express";

export const reviewRouter = Router();

reviewRouter.get(Paths.Reviews.Get, ReviewRoutes.getAll);
reviewRouter.get(Paths.Reviews.GetOne, ReviewRoutes.getOne);
reviewRouter.post(Paths.Reviews.Add, ReviewRoutes.add);
reviewRouter.put(Paths.Reviews.Update, ReviewRoutes.update);
reviewRouter.delete(Paths.Reviews.Delete, ReviewRoutes.delete);