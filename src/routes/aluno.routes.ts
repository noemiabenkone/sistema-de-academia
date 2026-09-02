import { Router } from "express";
import {
  listarAlunos,
  buscarAluno,
  criarAluno,
  atualizarAluno,
  desativarAluno,
  
} from "../controllers/aluno.controller.js";

const router = Router();

router.get("/", listarAlunos);
router.get("/:id", buscarAluno);
router.post("/", criarAluno);
router.put("/:id", atualizarAluno);
router.patch("/:id", desativarAluno);


export default router;
