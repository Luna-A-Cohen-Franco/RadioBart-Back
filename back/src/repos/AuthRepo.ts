import {IUser} from '@src/models/User';
import bcrypt from 'bcrypt';
import { generateToken } from '@src/util/jwt';
import User from '@src/db/models/UserModel';

async function login(user: IUser): Promise<string>{
    const foundUser = await User.findOne({ username: user.username });

    if (!foundUser) {
        throw new Error('User doesnt exist');
    }

    const equals = await bcrypt.compare(user.password, foundUser.password);

    if (equals) {
        return generateToken(foundUser._id);
    } else {
        throw new Error('Invalid credentials');
    }
}

export default {
    login
} as const;
