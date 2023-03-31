import { Router } from 'express'
import { addTeam } from '../controller/team.controller.js';
import { getUser } from '../controller/team.controller.js';
const router = Router();

let placeholder = () => { }

router.get('/api/team', placeholder)
router.post('api/team', placeholder)
router.get('/team/test', getUser)

router.post('/team', addTeam)


export default router