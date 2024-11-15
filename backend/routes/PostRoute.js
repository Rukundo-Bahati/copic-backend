import express from "express";
import {
  createPost,
  deletePost,
  updatePost,
  getPost,
  getTimelinePosts,
  likePost,
} from "../controllers/postController.js";
import authMiddleWare from "../middleware/auth.js";

const router = express.Router();

router.post('/',createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts);

export default router