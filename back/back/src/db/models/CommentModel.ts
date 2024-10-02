import mongoose from "mongoose";
import commentSchema from "@src/db/schemas/CommentSchema";

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;