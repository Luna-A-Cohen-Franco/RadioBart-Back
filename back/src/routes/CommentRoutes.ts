import HttpStatusCodes from "@src/consts/HttpStatusCodes";
import CommentMethods, {IComment} from "@src/models/Comment";
import { IReq, IRes } from "@src/types/types";
import CommentRepo from "@src/repos/CommentRepo";

async function getAll(req: IReq, res: IRes) {
    const comments = await CommentRepo.getAll();
    return res.status(HttpStatusCodes.OK).json(comments);
}

async function getOne(req: IReq, res: IRes) {
    const comment = await CommentRepo.getOne(req.params.id);
    return res.status(HttpStatusCodes.OK).json(comment);
}

async function add(req: IReq<{comment: IComment}>, res: IRes) {
    if (!CommentMethods.isComment(req.body)) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: "Invalid comment data" });
    }

    const comment = CommentMethods.from(req.body);

    try {
        const newComment = await CommentRepo.add(comment);
        return res.status(HttpStatusCodes.CREATED).json(newComment);
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error adding comment" });
    }
}

async function update(req: IReq<{comment: IComment}>, res: IRes) {
    if (!CommentMethods.isComment(req.body)) {
        return res.status(HttpStatusCodes.BAD_REQUEST).end();
    }

    const comment = CommentMethods.from(req.body);

    await CommentRepo.update(req.params.id, comment);

    return res.status(HttpStatusCodes.OK).end();
}

async function delete_(req: IReq, res: IRes) {
    await CommentRepo.delete(req.params.id);
    return res.status(HttpStatusCodes.OK).end();
}

export default {
    getAll,
    getOne,
    add,
    update,
    delete: delete_,
} as const;