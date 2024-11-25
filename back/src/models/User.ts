export interface IUser {
  username: string;
  password: string;
  role: boolean;
  picture?: string;
  admin_secret?: string;
}

function new_(
  username: string,
  password: string,
): IUser {
  return {
    username: username,
    password: password,
    role: false, // Default to false for regular users
    picture: '',
    admin_secret: '',
  };
}

function from(obj: any): IUser {
  return {
    username: obj.username,
    password: obj.password,
    role: obj.role ?? false,
    picture: obj.picture ?? '',
    admin_secret: obj.admin_secret ?? '',
  };
}

function isUser(obj: any): boolean {
  return typeof obj === 'object' &&
    'username' in obj && typeof obj.username === 'string' && 
    'password' in obj && typeof obj.password === 'string' &&
    'picture' in obj && typeof obj.picture === 'string';
}

function fromParaLogin(obj: any): IUser {
  return {
    username: obj.username,
    password: obj.password,
    role: obj.role ?? false,
    picture: obj.picture ?? '',
  };
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