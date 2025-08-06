// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
});

export default mongoose.model('Post', postSchema);
