import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import AlbumMethods, {IAlbum} from '@src/models/Album';
import { IReq, IRes } from "@src/types/types";
import AlbumRepo from '@src/repos/AlbumRepo';
import ArtistRepo from '@src/repos/ArtistRepo';

async function getAll(req: IReq, res: IRes) {
  const albums = await AlbumRepo.getAll();
  console.log(albums);
  return res.status(HttpStatusCodes.OK).json(albums);
}

async function getOne(req: IReq, res: IRes) {
  const album = await AlbumRepo.getOne(req.params.id);
  
  return res.status(HttpStatusCodes.OK).json(album);
}

async function add(req: IReq<{ album: IAlbum }>, res: IRes) {
  if (!AlbumMethods.isAlbum(req.body)) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "Invalid album data" });
  }

  const album = AlbumMethods.from(req.body);

  try {
      // Primero, agrega el álbum
      const newAlbum = await AlbumRepo.add(album);

      // Luego, agrega el ID del nuevo álbum al array de álbumes del artista
      console.log(await ArtistRepo.addAlbumToArtist(album.artist, newAlbum._id));


      return res.status(HttpStatusCodes.CREATED).json(newAlbum);
  } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error adding album" });
  }
}

async function update(req: IReq<{album: IAlbum}>, res: IRes) {
  if (!AlbumMethods.isAlbum(req.body)){
      return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }
  
  const album = AlbumMethods.from(req.body);
  
  await AlbumRepo.update(req.params.id, album);

  return res.status(HttpStatusCodes.OK).end();
}

async function delete_(req: IReq, res: IRes) {
  await AlbumRepo.delete(req.params.id);
  return res.status(HttpStatusCodes.OK).end();
}

export default {
    getAll,
    getOne,
    add,
    update,
    delete: delete_
} as const;