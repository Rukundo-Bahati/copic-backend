import express from 'express';
import { addComment, deleteComment, getCommentsForPost } from '../controllers/commentController.js';

const router = express.Router(); 

router.get("/all/:postId", getCommentsForPost); 
router.post("/addComment/:postId", addComment); 
router.delete("/deleteComment/:commentId", deleteComment); 

export default router;
