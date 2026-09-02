import {Router} from 'express';
import { 
    listarRoles, 
    buscarRole, 
    criarRole, 
    atualizarRole, 
    desativarRole 
} from '../controllers/role.controller.js';

const router = Router();

router.get('/', listarRoles);
router.get('/:id', buscarRole);
router.post('/', criarRole);
router.put('/:id', atualizarRole);
router.patch('/:id', desativarRole);

export default router;