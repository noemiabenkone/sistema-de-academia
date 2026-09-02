import { Router } from "express";
import {
  listarMatriculas,
  buscarMatricula,
  criarMatricula,
  atualizarMatricula,
  cancelarMatricula,
} from "../controllers/matricula.controller.js";

const router = Router();

router.get("/", listarMatriculas);
router.get("/:id", buscarMatricula);
router.post("/", criarMatricula);
router.put("/:id", atualizarMatricula);
router.patch("/:id", cancelarMatricula);

export default router;
