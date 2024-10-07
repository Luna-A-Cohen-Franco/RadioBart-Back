import Paths from "@src/consts/Paths";
import AlbumRoutes from "@src/routes/AlbumRoutes";
import { Router } from "express";
import { authenticateToken } from "@src/middleware/tokenValidator";

export const albumRouter = Router();


albumRouter.get(Paths.Albums.Get, AlbumRoutes.getAll);
albumRouter.get(Paths.Albums.GetOne, AlbumRoutes.getOne);
albumRouter.get(Paths.Albums.Average, AlbumRoutes.getAverageRating);
albumRouter.post(Paths.Albums.Add, authenticateToken, AlbumRoutes.add);
albumRouter.put(Paths.Albums.Update, authenticateToken, AlbumRoutes.update);
albumRouter.delete(Paths.Albums.Delete, authenticateToken, AlbumRoutes.delete);