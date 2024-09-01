export interface IUser {
  id: number,
  username: string,
  password: string
}

function new_(
  id: number,
  username: string,
  password: string
): IUser {
  return {
    id: id,
    username: username,
    password: password
  };
}


function from(obj: any): IUser {
  if (isUser(obj)) {
    return new_(obj.id, obj.username, obj.password)
  }
  throw new Error("Object isn't a user")
}

function isUser(obj: any): boolean {
  return typeof obj === 'object' &&
    'id' in obj && typeof obj.id === 'number' && 
    'username' in obj && typeof obj.username === 'string' && 
    'password' in obj && typeof obj.password === 'string' 
}

export default {
  new: new_,
  from,
  isUser,
} as const;
