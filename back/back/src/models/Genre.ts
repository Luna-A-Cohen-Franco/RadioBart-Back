export interface IGenre{
    name: string
}

function new_(
    name: string
): IGenre {
    return {
        name: name
    };
}

function from(obj: any): IGenre {
    if (isGenre(obj)) {
        return new_(obj.name);
    }
    throw new Error("Object isn't a genre")
}

function isGenre(obj: any): boolean {
    return typeof obj === 'object' &&
        'name' in obj && typeof obj.name === 'string';
}

export default {
    new: new_,
    from,
    isGenre,
} as const;