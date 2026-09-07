import {Router} from 'express';
import { 
    listarCheckIns, 
    buscarCheckIn, 
    registrarCheckIn 
} from '../controllers/checkIn.controller.js';

const router = Router();

router.get('/', listarCheckIns);
router.get('/:id', buscarCheckIn);
router.post('/:id', registrarCheckIn);

export default router;