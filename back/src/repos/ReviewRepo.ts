import Review from "@src/db/models/ReviewModel";
import Album from "@src/db/models/AlbumModel";
import { IReview } from "@src/models/Review";
import AlbumRepo from "./AlbumRepo";
import Comment from "@src/db/models/CommentModel";

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
        await AlbumRepo.addReviewToAlbum(review.album, newReview._id);
    } catch (error) {
        throw new Error(`Error adding review and updating album: ${error.message}`);
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
        await Comment.deleteMany({ review: id }).exec();
        await Album.updateMany({}, { $pull: { reviews: id } }).exec();
        await Review.findByIdAndDelete(id).exec();
        console.log("Review and associated comments deleted successfully");
    } catch (error) {
        throw new Error(`Error deleting review: ${error.message}`);
    }
}

async function changeLikes(reviewId: string, newLikes: number, userId: string): Promise<void> {
    try {
        const review = await Review.findById(reviewId);
        if (review && review.likes !== undefined && review.likes !== null && review.likes > newLikes) {
            await Review.updateOne({ _id: reviewId }, { likes: newLikes, $pull: { usuarioLike: userId } });
        } else {
            await Review.updateOne({ _id: reviewId }, { likes: newLikes, $push: { usuarioLike: userId } });
        }
    } catch (error) {
        throw new Error(`Error updating likes: ${error.message}`);
    }
}

export default {
    getOne,
    getAll,
    add,
    update,
    delete: delete_,
    changeLikes
} as const;