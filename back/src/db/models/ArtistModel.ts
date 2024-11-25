import mongoose from "mongoose";
import artistSchema from "../schemas/ArtistSchema";

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;