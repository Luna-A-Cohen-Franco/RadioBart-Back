import HttpStatusCodes from "@src/consts/HttpStatusCodes";
import ArtistMethods, { IArtist } from "@src/models/Artist";
import { IReq, IRes } from "@src/types/types";
import ArtistRepo from "@src/repos/ArtistRepo";
import { Request, Response } from "express";

async function getAll(req: IReq, res: IRes) {
  const artists = await ArtistRepo.getAll();
  return res.status(HttpStatusCodes.OK).json(artists);
}

async function getOne(req: IReq, res: IRes) {
  console.log(req.params.id);
  const artist = await ArtistRepo.getOne(req.params.id);

  return res.status(HttpStatusCodes.OK).json(artist);
}

async function getPaginatedArtists(req: IReq, res: IRes) {
  const { limit, page, searchString } = req.query;
  try {
      const result = await ArtistRepo.getPaginatedArtists(Number(limit), Number(page), searchString as string);
      return res.status(HttpStatusCodes.OK).json(result);
  } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
}


async function add(req: IReq, res: IRes) {
  console.log(req.body)
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

async function update(req: IReq, res: IRes) {
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

async function getArtistAverageRating(req: IReq, res: IRes) {
  try {
    const artistId = req.params.id;
    const averageRating = await ArtistRepo.getArtistAverageRating(artistId);
    return res.status(HttpStatusCodes.OK).json({ averageRating });
  } catch (error) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error getting artist's average rating" });
  }
}
export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
  getArtistAverageRating,
  getPaginatedArtists
} as const;