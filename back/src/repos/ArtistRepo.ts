import Artist from "@src/db/models/ArtistModel";
import { IArtist } from "@src/models/Artist";
import { ObjectId } from "mongodb";

async function getAll() {
    try {
        console.log("getall");
        const artists = await Artist.find().exec();
        console.log("gotall");
        return artists;
    } catch (error) {
        throw new Error(`Error fetching artists: ${error.message}`);
    }
}

async function getOne(id: string) {
    try {
        console.log("getone");
        const artist = await Artist.findById(id).exec();
        console.log("gotone");
        return artist;
    } catch (error) {
        throw new Error(`Error fetching artist: ${error.message}`);
    }
}

async function add(artist: IArtist) {
    try {
        const newArtist = new Artist(artist);
        await newArtist.save();
        return newArtist; // Retorna el artista recién creado
    } catch (error) {
        throw new Error(`Error adding artist: ${error.message}`);
    }
}

async function update(id: string, artist: IArtist) {
    try {
        await Artist.findByIdAndUpdate(id, artist, { new: true }).exec();
    } catch (error) {
        throw new Error(`Error updating artist: ${error.message}`);
    }
}

async function delete_(id: string) {
    try {
        await Artist.findByIdAndDelete(id).exec();
    } catch (error) {
        throw new Error(`Error deleting artist: ${error.message}`);
    }
}

async function addAlbumToArtist(artistId: string, albumId: ObjectId) {
    try {
        await Artist.findByIdAndUpdate(
            artistId,
            { $addToSet: { albums: albumId } }, // Esto agrega el ID del álbum al array de álbumes del artista
            { new: true }
        ).exec();
    } catch (error) {
        throw new Error(`Error adding album to artist: ${error.message}`);
    }
}

export default {
    getOne,
    getAll,
    add,
    update,
    delete: delete_,
    addAlbumToArtist, // Exporta la nueva función
} as const;