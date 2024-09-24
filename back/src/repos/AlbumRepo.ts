import Album from '@src/db/models/AlbumModel';
import { IAlbum } from '@src/models/Album';

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
        await Album.findByIdAndDelete(id).exec();
    }
    catch (error) {
        throw new Error(`Error deleting album: ${error.message}`);
    }
}

export default {
    getOne,
    getAll,
    add,
    update,
    delete: delete_
} as const;