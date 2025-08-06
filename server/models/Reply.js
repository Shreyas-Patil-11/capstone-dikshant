import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' },
});

export default mongoose.model('Reply', replySchema);
