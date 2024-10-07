
import { IReview } from "./Review";


export interface IAlbum {
    title: string,
    artist: string, 
    fecha: string,
    genre: string
    reviews: string[],
    cover: string
}

function new_(
    title: string,
    artist: string,
    fecha: string,
    genre: string,
    reviews: string[] = [], 
    cover: string
): IAlbum {
    return {
        title: title,
        artist: artist,
        fecha: fecha,
        genre: genre,
        reviews: reviews,
        cover: cover
    };
}

function from(obj: any): IAlbum {
    if (isAlbum(obj)) {
        return new_(obj.title, obj.artist, obj.fecha, obj.genre, obj.reviews, obj.cover);
    }
    throw new Error("Object isn't an album")
}

function isAlbum(obj: any): boolean {
    return typeof obj === 'object' &&
        'title' in obj && typeof obj.title === 'string' &&
        'artist' in obj && typeof obj.artist === 'string' &&
        'fecha' in obj && typeof obj.fecha === 'string' &&
        'genre' in obj && typeof obj.genre === 'string' &&
        'reviews' in obj && Array.isArray(obj.reviews) &&
        'cover' in obj && typeof obj.cover === 'string';
}

export default {
    new: new_,
    from,
    isAlbum,
} as const;