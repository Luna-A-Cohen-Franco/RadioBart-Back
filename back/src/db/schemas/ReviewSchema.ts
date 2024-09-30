import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true },
    likes: { type: Number, required: false }
});

export default reviewSchema;