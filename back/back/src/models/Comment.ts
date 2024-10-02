export interface IComment {
    review: string,
    user: string,
    date: Date,
    comment: string
}

function new_(
    review: string,
    user: string,
    date: Date,
    comment: string
): IComment {
    return {
        review: review,
        user: user,
        date: date,
        comment: comment
    };
}

function from(obj: any): IComment {
    if (isComment(obj)) {
        return new_(obj.review, obj.user, obj.date, obj.comment);
    }
    throw new Error("Object isn't a comment")
}

function isComment(obj: any): boolean {
    return typeof obj === 'object' &&
        'review' in obj && typeof obj.review === 'string' &&
        'user' in obj && typeof obj.user === 'string' &&
        'date' in obj && obj.date instanceof Date &&
        'comment' in obj && typeof obj.comment === 'string';
}

export default {
    new: new_,
    from,
    isComment,
} as const;