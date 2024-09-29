import { IGenre } from "@src/models/Genre";
import Genre from "@src/db/models/GenreModel";
import { ObjectId } from "mongodb";

async function getAll() {
    try {
        const genres = await Genre.find().exec();
        return genres;
    } catch (error) {
        throw new Error(`Error fetching genres: ${error.message}`);
    }
}

async function getOne(id: string) {
    try {
        const genre = await Genre.findById(id).exec();
        return genre;
    } catch (error) {
        throw new Error(`Error fetching genre: ${error.message}`);
    }
}

async function add(genre: IGenre) {
    try {
        const newGenre = new Genre(genre);
        await newGenre.save();
        return newGenre; // Retorna el género recién creado
    } catch (error) {
        throw new Error(`Error adding genre: ${error.message}`);
    }
}

async function update(id: string, genre: IGenre) {
    try {
        await Genre.findByIdAndUpdate(id, genre, { new: true }).exec();
    }
    catch (error) {
        throw new Error(`Error updating genre: ${error.message}`);
    }
}

async function delete_(id: string) {
    try {
        await Genre.findByIdAndDelete(id).exec();
    } catch (error) {
        throw new Error(`Error deleting genre: ${error.message}`);
    }
}

export default {
    getAll,
    getOne,
    add,
    update,
    delete: delete_,
} as const;