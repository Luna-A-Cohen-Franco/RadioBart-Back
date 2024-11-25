import { IAlbum } from "./Album";

export interface IArtist {
    name: string,
    albums: string[],
    picture: string
}

function new_(
    name: string,
    albums: string[],
    picture: string
): IArtist {
    return {
        name: name,
        albums: albums,
        picture: picture
    };
}

function from(obj: any): IArtist {
    if (isArtist(obj)) {
        return new_(obj.name, obj.albums, obj.picture)
    }
    throw new Error("Object isn't an artist")
}

function isArtist(obj: any): boolean {
    return typeof obj === 'object' &&
        'name' in obj && typeof obj.name === 'string' &&
        'albums' in obj && Array.isArray(obj.albums) &&
        'picture' in obj && typeof obj.picture === 'string';
}

export default {
    new: new_,
    from,
    isArtist,
} as const;