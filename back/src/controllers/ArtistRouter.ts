import Paths from "@src/consts/Paths";
import ArtistRoutes from "@src/routes/ArtistRoutes";
import { Router } from "express";

export const artistRouter = Router();

artistRouter.get(Paths.Artists.Get, ArtistRoutes.getAll);
artistRouter.get(Paths.Artists.GetOne, ArtistRoutes.getOne);
artistRouter.post(Paths.Artists.Add, ArtistRoutes.add);
artistRouter.put(Paths.Artists.Update, ArtistRoutes.update);
artistRouter.delete(Paths.Artists.Delete, ArtistRoutes.delete);
