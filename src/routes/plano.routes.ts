import { Router } from "express";
import {
  listarPlanos,
  buscarPlano,
  criarPlano,
  atualizarPlano,
  desativarPlano,
} from "../controllers/plano.controller.js";

const router = Router();

router.get("/", listarPlanos);
router.get("/:id", buscarPlano);
router.post("/", criarPlano);
router.put("/:id", atualizarPlano);
router.patch("/:id", desativarPlano);

export default router;
