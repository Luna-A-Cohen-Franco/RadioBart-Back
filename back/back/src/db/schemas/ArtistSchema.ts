import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    albums: { type: [String], required: true },
    picture: { type: String, required: true }
});

export default artistSchema;