import { IAlbum } from "./Album";

export interface IArtist {
    name: string,
    albums: IAlbum[] //cambiar a IAlbum[]
}

function new_(
    name: string,
    albums: IAlbum[]
): IArtist {
    return {
        name: name,
        albums: albums
    };
}

function from(obj: any): IArtist {
    if (isArtist(obj)) {
        return new_(obj.name, obj.albums)
    }
    throw new Error("Object isn't an artist")
}

function isArtist(obj: any): boolean {
    return typeof obj === 'object' &&
        'name' in obj && typeof obj.name === 'string' &&
        'albums' in obj && Array.isArray(obj.albums) && obj.albums.every((album: any) => album.isAlbum(album))
}

export default {
    new: new_,
    from,
    isArtist,
} as const;