import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    review: { type: String, required: true },
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true }
});

export default commentSchema;