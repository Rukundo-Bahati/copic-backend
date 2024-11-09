import express from "express";
import authMiddleWare from '../middleware/auth.js';
import { getAllUsers, getUser, followUser,unfollowUser,deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, unfollowUser)


export default router;
