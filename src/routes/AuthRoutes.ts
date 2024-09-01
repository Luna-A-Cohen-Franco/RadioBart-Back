import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import UserMethods, { IUser } from '@src/models/User';
import AuthRepo from '@src/repos/AuthRepo';
import { IReq, IRes } from "@src/types/types";

async function login(req : IReq<{user: IUser}>, res : IRes) {
    if (!UserMethods.isUser(req.body)){
        return res.status(HttpStatusCodes.BAD_REQUEST).end();
    }
    
    const user = UserMethods.from(req.body);

    try {
        const token = await AuthRepo.login(user);

        return res.status(HttpStatusCodes.OK).send({ token });
    }
    catch (error) {
        return res.status(HttpStatusCodes.UNAUTHORIZED).end();
    }
}
export default {
    login
} as const;