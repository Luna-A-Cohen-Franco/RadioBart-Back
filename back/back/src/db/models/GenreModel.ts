import mongoose from "mongoose";
import genreSchema from "@src/db/schemas/GenreSchema";

const Genre = mongoose.model('Genre', genreSchema);

export default Genre