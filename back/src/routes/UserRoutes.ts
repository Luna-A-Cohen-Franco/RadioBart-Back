import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import UserMethods, {IUser} from '@src/models/User';
import { IReq, IRes} from "@src/types/types";
import { NextFunction as INext } from 'express';
import UserRepo from '@src/repos/UserRepo';

async function getAll(req: IReq<{}>, res: IRes) {
  const users = await UserRepo.getAll();
  return res.status(HttpStatusCodes.OK).json(users);
}

async function getOne(req: IReq<{ id: string }>, res: IRes) {
  const { id } = req.params;
  const user = await UserRepo.getOne(id);
  if (!user) {
    return res.status(HttpStatusCodes.NOT_FOUND).end();
  }
  return res.status(HttpStatusCodes.OK).json(user);
}

async function add(req: IReq<{user: IUser}>, res: IRes) {
  if (!UserMethods.isUser(req.body)){
      return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }
  console.log(req.body);
  const user = UserMethods.from(req.body);
  console.log(user);
  
  await UserRepo.add(user);

  return res.status(HttpStatusCodes.CREATED).end();
}

async function update(req: IReq<{ id: string, user: IUser }>, res: IRes) {
  const { id } = req.params;
  const { user } = req.body;

  if (!UserMethods.isUser(user)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }

  const updatedUser = await UserRepo.update(id, user);

  if (!updatedUser) {
    return res.status(HttpStatusCodes.NOT_FOUND).end();
  }

  return res.status(HttpStatusCodes.OK).json(updatedUser);
}

async function delete_(req: IReq<{ id: string }>, res: IRes) {
  const { id } = req.params;

  const deletedUser = await UserRepo.delete_(id);

  if (deletedUser === undefined) {
    return res.status(HttpStatusCodes.NOT_FOUND).end();
  }

  return res.status(HttpStatusCodes.OK).json(deletedUser);
}

async function getUserStats(req: IReq<{ userId: string }>, res: IRes) {
  const userId  = req.params.userId;
  const stats = await UserRepo.getUserStats(userId);
  return res.status(HttpStatusCodes.OK).json(stats);
}

export default {
  getAll,
  getOne,
  add,
  update,
  delete_,
  getUserStats
} as const;
