import { IAlbum } from "./Album";
import { IUser } from "./User";

export interface IReview {
    album: IAlbum, //cambiar a IAlbum
    rating: number,
    review: string
    user: IUser //cambiar a IUser
    date: Date,
    likes?: number
}

function new_(
    album: IAlbum,
    rating: number,
    review: string,
    user: IUser,
    date: Date = new Date(),
    likes?: number
): IReview {
    return {
        album: album,
        rating: rating,
        review: review,
        user: user,
        date: date,
        likes: likes
    };
}

function from(obj: any): IReview {
    if (isReview(obj)) {
        return new_(obj.album, obj.rating, obj.review, obj.user, obj.date, obj.likes);
    }
    throw new Error("Object isn't a review")
}

function isReview(obj: any): boolean {
    return typeof obj === 'object' &&
        'album' in obj && typeof obj.album === 'object' &&
        'rating' in obj && typeof obj.rating === 'string' &&
        'review' in obj && typeof obj.review === 'string' &&
        'user' in obj && typeof obj.user === 'object' &&
        'date' in obj && obj.date instanceof Date &&
        'likes' in obj && typeof obj.likes === 'number';
}

export default {
    new: new_,
    from,
    isReview,
} as const;