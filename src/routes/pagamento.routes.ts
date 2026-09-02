import {Router} from 'express';
import { 
    listarPagamentos, 
    buscarPagamento, 
    registrarPagamento 
} from '../controllers/pagamento.controller.js';

const router = Router();

router.get('/', listarPagamentos);
router.get('/:id', buscarPagamento);
router.post('/:id', registrarPagamento);

export default router;