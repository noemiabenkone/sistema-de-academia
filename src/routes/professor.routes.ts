import {Router} from 'express';

import{
    criarProfessor,
    atualizarProfessor,
    desativarProfessor,
    consultarProfessor,
    listarProfessores} 

from '../controllers/professor.controller.js';

const router = Router();

router.get("/", listarProfessores);
router.get("/:id", consultarProfessor);
router.post("/", criarProfessor);
router.put("/:id", atualizarProfessor);
router.patch("/:id", desativarProfessor);

export default router;