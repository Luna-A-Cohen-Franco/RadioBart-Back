import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    album: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    user: { type: String, required: true }
});

export default reviewSchema;