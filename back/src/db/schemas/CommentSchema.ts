import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true }
});

export default commentSchema;