import mongoose from "mongoose";
import ReviewSchema from "../schemas/ReviewSchema";

const Review = mongoose.model("Review", ReviewSchema);

export default Review;