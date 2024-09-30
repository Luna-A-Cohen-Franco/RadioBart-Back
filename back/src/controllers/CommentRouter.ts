import Paths from "@src/consts/Paths";
import CommentRoutes from "@src/routes/CommentRoutes";
import { Router } from "express";

export const commentRouter = Router();

commentRouter.get(Paths.Comments.Get, CommentRoutes.getAll);
commentRouter.get(Paths.Comments.GetOne, CommentRoutes.getOne);
commentRouter.post(Paths.Comments.Add, CommentRoutes.add);
commentRouter.put(Paths.Comments.Update, CommentRoutes.update);
commentRouter.delete(Paths.Comments.Delete, CommentRoutes.delete);