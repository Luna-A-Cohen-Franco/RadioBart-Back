import { Router } from 'express';
import Paths from '@src/consts/Paths';
import AlbumRoutes from '@src/routes/AlbumRoutes';
import { authenticateToken } from '@src/middleware/tokenValidator';
import { isAdmin } from '@src/middleware/roleValidator';

export const albumRouter = Router();

albumRouter.get(Paths.Albums.Get, AlbumRoutes.getAll);
albumRouter.get(Paths.Albums.GetOne, AlbumRoutes.getOne);
albumRouter.get(Paths.Albums.Average, AlbumRoutes.getAverageRating);
albumRouter.get(Paths.Albums.Paginated, AlbumRoutes.getPaginatedAlbums);
albumRouter.post(Paths.Albums.Add, authenticateToken, isAdmin, AlbumRoutes.add); 
albumRouter.put(Paths.Albums.Update, authenticateToken, isAdmin, AlbumRoutes.update); 
albumRouter.delete(Paths.Albums.Delete, authenticateToken, isAdmin, AlbumRoutes.delete); 