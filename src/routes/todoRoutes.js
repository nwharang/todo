import { Router } from 'express'
import {getUser } from '../controller/todo.controller.js';
const router = Router();

let placeholder = () => { }

router.get('/auth/todo', placeholder)
router.post('/auth/todo', placeholder)
router.get('/todo/test', getUser)


export default router