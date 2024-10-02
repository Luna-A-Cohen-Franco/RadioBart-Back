import mongoose from "mongoose";
import albumSchema from "@src/db/schemas/AlbumSchema";

const Album = mongoose.model('Album', albumSchema);

export default Album