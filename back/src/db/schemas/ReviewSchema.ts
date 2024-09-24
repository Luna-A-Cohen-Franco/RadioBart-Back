import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export default reviewSchema;