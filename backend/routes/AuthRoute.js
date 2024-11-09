import express from 'express';
import {login, signUp,logout, userProfile} from '../controllers/authController.js'

const router = express.Router();

router.post('/login', login)
router.post('/signup', signUp)
router.post('/logout', logout)
router.post('/:id/profile', userProfile)

export default router