import express from 'express';
import Post from '../models/Post.js';
import UserProfile from '../models/UserProfile.js';
import Reply from '../models/Reply.js';
import { fileURLToPath } from 'url';
import path from 'path';
import multer from 'multer';

const router = express.Router();

// Create a new post
router.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('createdBy').populate('replies');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('createdBy').populate('replies');
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a reply to a post
router.post('/posts/:id/reply', async (req, res) => {
  try {
    const reply = new Reply(req.body);
    await reply.save();

    const post = await Post.findById(req.params.id);
    post.replies.push(reply);
    await post.save();

    res.status(201).json(reply);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const profile = await UserProfile.findById(req.params.userId).populate('posts');
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get __dirname since we're using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});

const upload = multer({ storage });

// ✅ Upload image route
router.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

export default router;
