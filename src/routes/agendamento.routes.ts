import { Router } from "express";
import {
  listarAgendamentos,
  consultarAgendamento,
  criarAgendamento,
  atualizarAgendamento,
  cancelarAgendamento,
} from "../controllers/agendamento.controller.js";

const router = Router();

router.get("/", listarAgendamentos);
router.get("/:id", consultarAgendamento);
router.post("/", criarAgendamento);
router.put("/:id", atualizarAgendamento);
router.patch("/:id", cancelarAgendamento);

export default router;
