import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password_hash: { type: String, required: true },
});

export default userSchema;