import { IAlbum } from "./Album";
import { IUser } from "./User";

export interface IReview {
    album: string, //cambiar a IAlbum
    rating: number,
    review: string
    user: string //cambiar a IUser
}

function new_(
    album: string,
    rating: number,
    review: string,
    user: string
): IReview {
    return {
        album: album,
        rating: rating,
        review: review,
        user: user
    };
}

function from(obj: any): IReview {
    if (isReview(obj)) {
        return new_(obj.album, obj.rating, obj.review, obj.user)
    }
    throw new Error("Object isn't a review")
}

function isReview(obj: any): boolean {
    return typeof obj === 'object' &&
        'album' in obj && typeof obj.album === 'string' &&
        'rating' in obj && typeof obj.rating === 'string' &&
        'review' in obj && typeof obj.review === 'string' &&
        'user' in obj && typeof obj.user === 'string'
}

export default {
    new: new_,
    from,
    isReview,
} as const;