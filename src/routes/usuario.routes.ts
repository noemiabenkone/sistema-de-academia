import { Router } from "express";
import {
  listarUsuarios,
  buscarUsuario,
  criarUsuario,
  atualizarUsuario,
  desativarUsuario,
} from "../controllers/usuario.controller.js";

const router = Router();

router.get("/", listarUsuarios);
router.get("/:id", buscarUsuario);
router.post("/", criarUsuario);
router.put("/:id", atualizarUsuario);
router.patch("/:id", desativarUsuario);

export default router;
