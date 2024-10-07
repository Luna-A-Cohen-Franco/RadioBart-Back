export interface IUser {
  username: string,
  password: string,
  picture?: string
}

function new_(
  username: string,
  password: string,
  picture?: string
): IUser {
  return {
    username: username,
    password: password,
    picture: picture 
  };
}


function from(obj: any): IUser {
  if (isUser(obj)) {
    return new_(obj.username, obj.password, obj.picture)
  }
  throw new Error("Object isn't a user")
}

function isUser(obj: any): boolean {
  return typeof obj === 'object' &&
    'username' in obj && typeof obj.username === 'string' && 
    'password' in obj && typeof obj.password === 'string' &&
    'picture' in obj && typeof obj.picture === 'string'; 
}

function fromParaLogin(obj: any): IUser {
  if (isUserParaLogin(obj)) {
    return new_(obj.username, obj.password)
  }
  throw new Error("Object isn't a user")
}

function isUserParaLogin(obj: any): boolean {
  return typeof obj === 'object' &&
    'username' in obj && typeof obj.username === 'string' && 
    'password' in obj && typeof obj.password === 'string';
}

export default {
  new: new_,
  from,
  isUser,
  fromParaLogin,
  isUserParaLogin
} as const;
