import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    image: { type: String, required: true }
});

export default albumSchema;