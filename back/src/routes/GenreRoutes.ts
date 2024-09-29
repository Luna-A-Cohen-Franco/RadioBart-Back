import HttpStatusCodes from "@src/consts/HttpStatusCodes";
import GenreMethods, { IGenre } from "@src/models/Genre";
import { IReq, IRes } from "@src/types/types";
import GenreRepo from "@src/repos/GenreRepo";

async function getAll(req: IReq, res: IRes) {
  const genres = await GenreRepo.getAll();
  return res.status(HttpStatusCodes.OK).json(genres);
}

async function getOne(req: IReq, res: IRes) {
  const genre = await GenreRepo.getOne(req.params.id);

  return res.status(HttpStatusCodes.OK).json(genre);
}

async function add(req: IReq<{ genre: IGenre }>, res: IRes) {
  if (!GenreMethods.isGenre(req.body)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "Invalid genre data" });
  }

  const genre = GenreMethods.from(req.body);

  try {
    await GenreRepo.add(genre);
    return res.status(HttpStatusCodes.CREATED).json(genre);
  } catch (error) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error adding genre" });
  }
}

async function update(req: IReq<{ genre: IGenre }>, res: IRes) {
  if (!GenreMethods.isGenre(req.body)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }

  const genre = GenreMethods.from(req.body);

  await GenreRepo.update(req.params.id, genre);

  return res.status(HttpStatusCodes.OK).end();
}

async function delete_(req: IReq, res: IRes) {
  await GenreRepo.delete(req.params.id);
  return res.status(HttpStatusCodes.OK).end();
}

export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
} as const;