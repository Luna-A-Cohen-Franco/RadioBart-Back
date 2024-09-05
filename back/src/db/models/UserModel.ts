import mongoose from "mongoose";
import userSchema from "@src/db/schemas/UserSchema";

const User = mongoose.model('Usuario', userSchema);

export default User