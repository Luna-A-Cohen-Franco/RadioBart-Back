import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import AlbumMethods, {IAlbum} from '@src/models/Album';
import { IReq, IRes } from "@src/types/types";
import AlbumRepo from '@src/repos/AlbumRepo';

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
      console.log('Invalid album data:', req.body);
      return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: 'Invalid album data' });
  }

  const album = AlbumMethods.from(req.body);

  try {
      await AlbumRepo.add(album);
      return res.status(HttpStatusCodes.CREATED).json(album);
  } catch (error) {
      console.error('Error adding album:', error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error adding album' });
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