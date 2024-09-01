export interface IUser {
  username: string,
  password: string
}

function new_(
  username: string,
  password: string
): IUser {
  return {
    username: username,
    password: password
  };
}


function from(obj: any): IUser {
  if (isUser(obj)) {
    return new_(obj.username, obj.password)
  }
  throw new Error("Object isn't a user")
}

function isUser(obj: any): boolean {
  return typeof obj === 'object' &&
    'username' in obj && typeof obj.username === 'string' && 
    'password' in obj && typeof obj.password === 'string' 
}

export default {
  new: new_,
  from,
  isUser,
} as const;
