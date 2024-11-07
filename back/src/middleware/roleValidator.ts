import { NextFunction as INext} from 'express';
import { IUser } from '@src/models/User';
import { IReq, IRes } from '@src/types/types';
import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import { IAlbum } from '@src/models/Album';
import UserRepo from '@src/repos/UserRepo';


export const isAdmin = async (req: IReq, res: IRes, next: INext) => {
    const { user_id, admin_secret } = req.params;
  
    const user = await UserRepo.getOne(user_id);
    if ((user as unknown as IUser)?.admin_secret !== admin_secret){
        return res.status(HttpStatusCodes.UNAUTHORIZED).end();
    }
    
    next()
}
