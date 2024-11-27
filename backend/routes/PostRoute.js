import express from "express";
import {
  createPost,
  deletePost,
  updatePost,
  getPost,
  getTimelinePosts,
  likePost,
  getAllPosts
} from "../controllers/postController.js";
import authMiddleWare from "../middleware/auth.js";

const router = express.Router();

router.post('/create',createPost)
router.get("/posts",getAllPosts)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts);

export default router