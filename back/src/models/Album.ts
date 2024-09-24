import { IArtist } from "./Artista nOANDA";


export interface IAlbum {
    title: string,
    artist: string, 
    year: number,
    genre: string //cambiar a IGenre
}

function new_(
    title: string,
    artist: string,
    year: number,
    genre: string
): IAlbum {
    return {
        title: title,
        artist: artist,
        year: year,
        genre: genre
    };
}

function from(obj: any): IAlbum {
    if (isAlbum(obj)) {
        return new_(obj.title, obj.artist, obj.year, obj.genre)
    }
    throw new Error("Object isn't an album")
}

function isAlbum(obj: any): boolean {
    return typeof obj === 'object' &&
        'title' in obj && typeof obj.title === 'string' &&
        'artist' in obj && typeof obj.artist === 'string' &&
        'year' in obj && typeof obj.year === 'number' &&
        'genre' in obj && typeof obj.genre === 'string'
}

export default {
    new: new_,
    from,
    isAlbum,
} as const;