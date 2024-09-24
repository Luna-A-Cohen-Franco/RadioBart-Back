import exp from "constants";
import { IAlbum } from "./Album";

export interface IArtist {
    name: string,
    albums: string //cambiar a IAlbum[]
}

function new_(
    name: string,
    albums: string
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
        'albums' in obj && /*(*/typeof obj.albums === 'string'/*) cambiar a Array.isArray(obj.albums)*/
}

export default {
    new: new_,
    from,
    isArtist,
} as const;