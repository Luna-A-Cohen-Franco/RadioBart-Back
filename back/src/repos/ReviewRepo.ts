import Review from "@src/db/models/ReviewModel";
import { IReview } from "@src/models/Review";

async function getAll() {
    try {
        const reviews = await Review.find().exec();
        return reviews;
    } catch (error) {
        throw new Error(`Error fetching reviews: ${error.message}`);
    }
}

async function getOne(id: string) {
    try {
        const review = await Review.findById(id).exec();
        return review;
    }
    catch (error) {
        throw new Error(`Error fetching review: ${error.message}`);
    }
}

async function add(review: IReview) {
    try {
        const newReview = new Review(review);
        await newReview.save();
    } catch (error) {
        throw new Error(`Error adding review: ${error.message}`);
    }
}

async function update(id: string, review: IReview) {
    try {
        await Review.findByIdAndUpdate
            (id, review, { new: true }).exec();
    }
    catch (error) {
        throw new Error(`Error updating review: ${error.message}`);
    }
}

async function delete_(id: string) {
    try {
        await Review.findByIdAndDelete(id).exec();
    }
    catch (error) {
        throw new Error(`Error deleting review: ${error.message}`);
    }
}

export default {
    getOne,
    getAll,
    add,
    update,
    delete: delete_
} as const;