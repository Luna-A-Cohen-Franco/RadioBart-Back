import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    picture: { type: String, required: true},
    role: { type: Boolean, required: true }
});

export default userSchema;