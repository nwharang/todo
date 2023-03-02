import { Router } from 'express'
import { authLogin_Post, authRegister_Post, getUser, writeUser } from '../controller/auth.controller.js';
const router = Router();

router.post('/auth/login', authLogin_Post)
router.post('/auth/register', authRegister_Post)
router.post('/auth/test', getUser)

export default router