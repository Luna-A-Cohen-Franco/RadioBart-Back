import HttpStatusCodes from "@src/consts/HttpStatusCodes";
import ArtistMethods, { IArtist } from "@src/models/Artist";
import { IReq, IRes } from "@src/types/types";
import ArtistRepo from "@src/repos/ArtistRepo";

async function getAll(req: IReq, res: IRes) {
  console.log("getalls")
  const artists = await ArtistRepo.getAll();
  console.log("gotalls")
  return res.status(HttpStatusCodes.OK).json(artists);
}

async function getOne(req: IReq, res: IRes) {
  console.log("getones")
  const artist = await ArtistRepo.getOne(req.params.id);
  console.log("gotones")

  return res.status(HttpStatusCodes.OK).json(artist);
}

async function add(req: IReq<{ artist: IArtist }>, res: IRes) {
  if (!ArtistMethods.isArtist(req.body)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "Invalid artist data" });
  }

  const artist = ArtistMethods.from(req.body);

  try {
    await ArtistRepo.add(artist);
    return res.status(HttpStatusCodes.CREATED).json(artist);
  } catch (error) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error adding artist" });
  }
}

async function update(req: IReq<{ artist: IArtist }>, res: IRes) {
  if (!ArtistMethods.isArtist(req.body)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }

  const artist = ArtistMethods.from(req.body);

  await ArtistRepo.update(req.params.id, artist);

  return res.status(HttpStatusCodes.OK).end();
}

async function delete_(req: IReq, res: IRes) {
  await ArtistRepo.delete(req.params.id);
  return res.status(HttpStatusCodes.OK).end();
}

export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
} as const;