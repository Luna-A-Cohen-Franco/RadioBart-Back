import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    fecha: { type: String, required: true },
    genre: { type: String, required: true },
    reviews: { type: [String], required: true },
    cover: { type: String, required: true }
});

export default albumSchema;