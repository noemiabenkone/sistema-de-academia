import { Request, Response } from "express";
import { listarAgendamentos as listarAgendamentosService } from "../services/agendamento.service.js";
import { buscarAgendamento as buscarAgendamentoService } from "../services/agendamento.service.js";
import { criarAgendamento as criarAgendamentoService } from "../services/agendamento.service.js";
import { atualizarAgendamento as atualizarAgendamentoService } from "../services/agendamento.service.js";
import { cancelarAgendamento as cancelarAgendamentoService } from "../services/agendamento.service.js";

export async function listarAgendamentos(req: Request, res: Response) {
 const agendamentos = await listarAgendamentosService();

  res.json({
    message: "Lista de agendamentos",
    data: agendamentos
  });
}

export async function consultarAgendamento(req: Request, res: Response) {
  const id = Number (req.params.id);
  const agendamento = await buscarAgendamentoService(id);

  res.json({
    message: `Agendamento ${id} encontrado`,
    data: agendamento
  });
}

export function criarAgendamento(req: Request, res: Response) {
  const agendamento = criarAgendamentoService(req.body);
  res.json({
    message: "Agendamento criado com sucesso",
  });
}

export function atualizarAgendamento(req: Request, res: Response) {
  const id = Number(req.params.id);
  const agendamento = atualizarAgendamentoService(id, req.body);
  res.json({
    message: `Agendamento ${req.params.id} atualizado com sucesso`,
  });
}

export function cancelarAgendamento(req: Request, res: Response) {
  const id = Number(req.params.id);
  const agendamento = cancelarAgendamentoService(id);
  res.json({
    message: `Agendamento ${req.params.id} cancelado com sucesso`,
  });
}
