import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
});

export default albumSchema;