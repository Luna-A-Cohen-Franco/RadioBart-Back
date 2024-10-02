import { IAlbum } from "./Album";
import { IComment } from "./Comment";
import { IUser } from "./User";

export interface IReview {
    album: string,
    rating: number,
    review: string
    user: string 
    date: string,
    comments: string[],
    likes: number
}

function new_(
    album: string,
    rating: number,
    review: string,
    user: string,
    date: string,
    comments: string[],
    likes: number,
): IReview {
    return {
        album: album,
        rating: rating,
        review: review,
        user: user,
        date: date,
        comments: comments,
        likes: likes
    };
}

function from(obj: any): IReview {
    if (isReview(obj)) {
        return new_(obj.album, obj.rating, obj.review, obj.user, obj.date, obj.comments, obj.likes);
    }
    throw new Error("Object isn't a review")
}

function isReview(obj: any): boolean {
    return typeof obj === 'object' &&
        'album' in obj && typeof obj.album === 'string' &&
        'rating' in obj && typeof obj.rating === 'number' &&
        'review' in obj && typeof obj.review === 'string' &&
        'user' in obj && typeof obj.user === 'string' &&
        'date' in obj && typeof obj.date === 'string' &&
        'comments' in obj && Array.isArray(obj.comments) &&
        'likes' in obj && typeof obj.likes === 'number';
}

export default {
    new: new_,
    from,
    isReview,
} as const;