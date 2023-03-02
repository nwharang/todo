import { Router } from 'express'
import { getUser } from '../controller/team.controller.js';
const router = Router();

let placeholder = () => { }

router.get('/api/team', placeholder)
router.post('/api/team', placeholder)
router.get('/team/test', getUser)

export default router