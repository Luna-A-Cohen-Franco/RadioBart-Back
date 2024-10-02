import Comment from "@src/db/models/CommentModel";
import { IComment } from "@src/models/Comment";

async function getAll() {
    try {
        const comments = await Comment.find().exec();
        return comments;
    } catch (error) {
        throw new Error(`Error fetching comments: ${error.message}`);
    }
}

async function getOne(id: string) {
    try {
        const comment = await Comment.findById(id);
        return comment;
    } catch (error) {
        throw new Error(`Error fetching comment with id ${id}: ${error.message}`);
    }
}

async function add(comment: IComment) {
    try {
        const newComment = new Comment(comment);
        await newComment.save();
        return newComment;
    } catch (error) {
        throw new Error(`Error adding comment: ${error.message}`);
    }
}

async function update(id: string, comment: IComment) {
    try {
        await Comment.findByIdAndUpdate(id, comment, { new: true }).exec();
    } catch (error) {
        throw new Error(`Error updating comment: ${error.message}`);
    }
}

async function delete_(id: string) {
    try {
        await Comment.findByIdAndDelete(id).exec();
    }
    catch (error) {
        throw new Error(`Error deleting comment: ${error.message}`);
    }
}

export default {
    getAll,
    getOne,
    add,
    update,
    delete: delete_,
} as const;