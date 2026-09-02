import {Router} from 'express';
import { 
    listarCheckIns, 
    buscarCheckIn, 
    realizarCheckIn 
} from '../controllers/checkin.controller.js';

const router = Router();

router.get('/', listarCheckIns);
router.get('/:id', buscarCheckIn);
router.post('/:id', realizarCheckIn);

export default router;