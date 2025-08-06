import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  username: String,
  points: Number,
  badges: [String],
  expertise: [String],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

export default mongoose.model('UserProfile', userProfileSchema);

