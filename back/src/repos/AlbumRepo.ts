import Album from '@src/db/models/AlbumModel';
import { IAlbum } from '@src/models/Album';
import Review from '@src/db/models/ReviewModel';
import { ObjectId } from 'mongodb';
import { IReview } from '@src/models/Review';
import Artist from '@src/db/models/ArtistModel';

async function getAll() {
    try {
        const albums = await Album.find().exec();
        return albums;
    } catch (error) {
        throw new Error(`Error fetching albums: ${error.message}`);
    }
}

async function getOne(id: string) {
    try {
        const album = await Album.findById(id).exec();
        return album;
    }
    catch (error) {
        throw new Error(`Error fetching album: ${error.message}`);
    }
}

async function add(album: IAlbum) {
    try {
        const newAlbum = new Album(album);
        await newAlbum.save();
        return newAlbum; // Retorna el álbum recién creado
    } catch (error) {
        throw new Error(`Error adding album: ${error.message}`);
    }
}
async function update(id: string, album: IAlbum) {
    try {
        await Album.findByIdAndUpdate
            (id, album, { new: true }).exec();
    }
    catch (error) {
        throw new Error(`Error updating album: ${error.message}`);
    }
}

async function delete_(id: string) {
    try {
        await Review.deleteMany({ album: id }).exec();
        await Artist.updateMany({}, { $pull: { albums: id } }).exec();
        await Album.findByIdAndDelete(id).exec();
        console.log("Album and associated reviews deleted successfully");
    } catch (error) {
        throw new Error(`Error deleting album: ${error.message}`);
    }
}

async function getAverageRating(albumId: ObjectId): Promise<number> {
    try {
        const reviews = await Review.find({ album: albumId }).exec();
        if (reviews.length === 0) {
            return 0;
        }
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
    } catch (error) {
        throw new Error(`Error calculating average rating: ${error.message}`);
    }
}

async function addReviewToAlbum(albumId: string, reviewId: ObjectId) {
    try {
        await Album.findByIdAndUpdate(
            albumId,
            { $addToSet: { reviews: reviewId } }, // Esto agrega el ID de la reseña al array de reseñas del álbum
            { new: true }
        ).exec();
    } catch (error) {
        throw new Error(`Error adding review to album: ${error.message}`);
    }
}

export default {
    getOne,
    getAll,
    add,
    update,
    delete: delete_,
    getAverageRating,
    addReviewToAlbum
} as const;