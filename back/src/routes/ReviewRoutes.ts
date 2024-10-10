import HttpStatusCodes from '@src/consts/HttpStatusCodes';
import ReviewMethods, { IReview } from '@src/models/Review';
import { IReq, IRes } from "@src/types/types";
import ReviewRepo from '@src/repos/ReviewRepo';

async function getAll(req: IReq, res: IRes) {
  const reviews = await ReviewRepo.getAll();
  console.log(reviews);
  return res.status(HttpStatusCodes.OK).json(reviews);
}

async function getOne(req: IReq, res: IRes) {
  const review = await ReviewRepo.getOne(req.params.id);
  
  return res.status(HttpStatusCodes.OK).json(review);
}

async function add(req: IReq<{ review: IReview }>, res: IRes) {
  if (!ReviewMethods.isReview(req.body)) {
      console.log('Invalid review data:', req.body);
      return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: 'Invalid review data' });
  }

  const review = ReviewMethods.from(req.body);

  try {
      await ReviewRepo.add(review);
      return res.status(HttpStatusCodes.CREATED).json(review);
  } catch (error) {
      console.error('Error adding review:', error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error adding review' });
  }
}

async function update(req: IReq<{review: IReview}>, res: IRes) {
  if (!ReviewMethods.isReview(req.body)){
      return res.status(HttpStatusCodes.BAD_REQUEST).end();
  }
  
  const review = ReviewMethods.from(req.body);
  
  await ReviewRepo.update(req.params.id, review);

  return res.status(HttpStatusCodes.OK).end();
}

async function delete_(req: IReq, res: IRes) {
  await ReviewRepo.delete(req.params.id);
  return res.status(HttpStatusCodes.OK).end();
}

async function changeLikes(req: IReq<{ likes: number, userId: string }>, res: IRes) {
  try {
    console.log(req.body);
    const reviewId = req.params.id;
    const newLikes = req.body.likes;
    const userId = req.body.userId;
    await ReviewRepo.changeLikes(reviewId, newLikes, userId);
    return res.status(HttpStatusCodes.OK).json({ message: "Likes updated successfully" });
  } catch (error) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error updating likes" });
  }
}

export default {
    getAll,
    getOne,
    add,
    update,
    delete: delete_,
    changeLikes
} as const;