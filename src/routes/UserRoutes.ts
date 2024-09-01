import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import User, {IUser} from '@src/models/User';
import { IReq, IRes } from "@src/types/types";
import UserRepo from '@src/repos/UserRepo';

async function register(req: IReq<{user: IUser}>, res: IRes) {
  const user = req.body.user;

  try{
    User.isUser(user);
  
    await UserRepo.register(user);
    return res.status(HttpStatusCodes.CREATED).end();
  } catch(err) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default {
  register
} as const;
