import Paths from "@src/consts/Paths";
import ArtistRoutes from "@src/routes/ArtistRoutes";
import { Router } from "express";
import { authenticateToken } from "@src/middleware/tokenValidator";

export const artistRouter = Router();

artistRouter.get(Paths.Artists.Get, ArtistRoutes.getAll);
artistRouter.get(Paths.Artists.GetOne, ArtistRoutes.getOne);
artistRouter.get(Paths.Artists.Average, ArtistRoutes.getArtistAverageRating);
artistRouter.post(Paths.Artists.Add, authenticateToken, ArtistRoutes.add);
artistRouter.put(Paths.Artists.Update, authenticateToken, ArtistRoutes.update);
artistRouter.delete(Paths.Artists.Delete, authenticateToken, ArtistRoutes.delete);
