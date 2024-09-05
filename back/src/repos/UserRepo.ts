import User from '@src/db/models/UserModel';
import { IUser } from '@src/models/User';
import bcrypt from 'bcrypt';

async function register(user: IUser): Promise<string | void> {
  const password_hash = await bcrypt.hash(user.password, 10);
  try {
    await User.create({
      username: user.username,
      password_hash: password_hash,
    });
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

export default {
  register
} as const;
