import Paths from "@src/consts/Paths";
import CommentRoutes from "@src/routes/CommentRoutes";
import { Router } from "express";
import { authenticateToken } from "@src/middleware/tokenValidator";

export const commentRouter = Router();

commentRouter.get(Paths.Comments.Get, CommentRoutes.getAll);
commentRouter.get(Paths.Comments.GetOne, CommentRoutes.getOne);
commentRouter.post(Paths.Comments.Add, authenticateToken, CommentRoutes.add);
commentRouter.put(Paths.Comments.Update, authenticateToken, CommentRoutes.update);
commentRouter.delete(Paths.Comments.Delete, authenticateToken, CommentRoutes.delete);