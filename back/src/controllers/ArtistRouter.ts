import Paths from "@src/consts/Paths";
import ArtistRoutes from "@src/routes/ArtistRoutes";
import { Router } from "express";
import { authenticateToken } from "@src/middleware/tokenValidator";
import { isAdmin } from "@src/middleware/roleValidator";

export const artistRouter = Router();

artistRouter.get(Paths.Artists.Get, ArtistRoutes.getAll);
artistRouter.get(Paths.Artists.GetOne, ArtistRoutes.getOne);
artistRouter.get(Paths.Artists.Average, ArtistRoutes.getArtistAverageRating);
artistRouter.post(Paths.Artists.Add, authenticateToken, isAdmin, ArtistRoutes.add);
artistRouter.put(Paths.Artists.Update, authenticateToken, isAdmin, ArtistRoutes.update);
artistRouter.delete(Paths.Artists.Delete, authenticateToken, isAdmin,  ArtistRoutes.delete);
