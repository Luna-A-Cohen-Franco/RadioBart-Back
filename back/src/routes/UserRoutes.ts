import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import UserMethods, {IUser} from '@src/models/User';
import { IReq, IRes } from "@src/types/types";
import UserRepo from '@src/repos/UserRepo';

async function register(req: IReq<{user: IUser}>, res: IRes) {
  if (!UserMethods.isUser(req.body)){
      return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }
  
  const user = UserMethods.from(req.body);
  
  await UserRepo.register(user);

  return res.status(HttpStatusCodes.CREATED).end();
}

export default {
  register
} as const;
