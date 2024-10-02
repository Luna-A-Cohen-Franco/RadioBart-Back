import Paths from "@src/consts/Paths";
import GenreRoutes from "@src/routes/GenreRoutes";
import { Router } from "express";

export const genreRouter = Router();

genreRouter.get(Paths.Genres.Get, GenreRoutes.getAll);
genreRouter.get(Paths.Genres.GetOne, GenreRoutes.getOne);
genreRouter.post(Paths.Genres.Add, GenreRoutes.add);
genreRouter.put(Paths.Genres.Update, GenreRoutes.update);
genreRouter.delete(Paths.Genres.Delete, GenreRoutes.delete);