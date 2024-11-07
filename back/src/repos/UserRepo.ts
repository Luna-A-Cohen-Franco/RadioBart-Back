import Review from '@src/db/models/ReviewModel';
import User from '@src/db/models/UserModel';
import { IUser } from '@src/models/User';
import bcrypt from 'bcrypt';

async function getAll() {
  try {
    const users = await User.find().exec();
    return users;
  } catch (error) {
    throw new Error(`Error retrieving users: ${error.message}` );
  }
}

async function getOne(id: string) {
  try {
    const user = await User.findById(id).exec();
    return user;
  } catch (error) {
    throw new Error(`Error retrieving user: ${error.message}`);
  }
}

async function add(user: IUser) {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new User({
      username: user.username,
      password: hashedPassword,
      picture: user.picture,
      role: user.role,
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

async function update(id: string, user: IUser) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true }).exec();
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
}

async function delete_(id: string) {
  try {
    const deletedUser = await User.findByIdAndDelete(id).exec();
    return deletedUser;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
}

async function getUserStats(userId: string) {
  try {
    const reviews = await Review.find({ user: userId }).exec();
    const reviewCount = reviews.length;
    const averageRating = reviewCount > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount : 0;
    const totalLikes = reviews.reduce((sum, review) => sum + (review.likes ?? 0), 0);
    return {
      reviewCount,
      averageRating,
      totalLikes
    };
  } catch (error) {
    throw new Error(`Error fetching user stats: ${error.message}`);
  }
}

export default {
  getAll,
  getOne,
  add,
  update,
  delete_,
  getUserStats
} as const;
