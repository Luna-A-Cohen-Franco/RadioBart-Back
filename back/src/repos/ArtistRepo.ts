import Artist from "@src/db/models/ArtistModel";
import { IArtist } from "@src/models/Artist";
import Review from "@src/db/models/ReviewModel";
import { ObjectId } from "mongodb";
import Album from "@src/db/models/AlbumModel";
import AlbumRepo from "./AlbumRepo";

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
        console.log(id);
        return artist;
    } catch (error) {
        throw new Error(`Error fetching artist: ${error.message}`);
    }
}

async function add(artist: IArtist) {
    try {
        const newArtist = new Artist(artist);
        console.log(newArtist)
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
        const albums = await Album.find({ artist: id }).exec();

        for (const album of albums) {
            await Review.deleteMany({ album: album._id }).exec();
        }
        
        await Album.deleteMany({ artist: id }).exec();
        await Artist.findByIdAndDelete(id).exec();

        console.log("Artist, associated albums, and reviews deleted successfully");
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

async function getArtistAverageRating(artistId: string): Promise<number> {
    try {
        const albums = await Album.find({ artist: artistId }).exec();
        if (albums.length === 0) {
            return 0;
        }
        const ratings = await Promise.all(albums.map(album => AlbumRepo.getAverageRating(album._id)));
        const totalRating = ratings.reduce((sum: any, rating: any) => sum + rating, 0);
        return totalRating / albums.length;
    } catch (error) {
        throw new Error(`Error calculating artist's average rating: ${error.message}`);
    }
}


export default {
    getOne,
    getAll,
    add,
    update,
    delete: delete_,
    addAlbumToArtist,
    getArtistAverageRating,
} as const;