import { Request, Response } from "express";
import {
 listarAgendamentos as listarAgendamentosService, 
 buscarAgendamento as buscarAgendamentoService,
 criarAgendamento as criarAgendamentoService,
 atualizarAgendamento as atualizarAgendamentoService,
 cancelarAgendamento as cancelarAgendamentoService 
} from "../services/agendamento.service.js";
import { agendamentoSchema } from "../schemas/agendamento.schema.js";

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

export async function criarAgendamento(req: Request, res: Response) {
  const dadosValidados = agendamentoSchema.parse(req.body)
  const agendamento = await criarAgendamentoService(dadosValidados);
  res.json({
    message: "Agendamento criado com sucesso",
    agendamento
  });
}

export async function atualizarAgendamento(req: Request, res: Response) {
  const id = Number(req.params.id);
  const dadosValidados = agendamentoSchema.parse(req.body)
  const agendamento = await atualizarAgendamentoService(id, dadosValidados);
  res.json({
    message: `Agendamento ${req.params.id} atualizado com sucesso`,
    agendamento
  });
}

export async function cancelarAgendamento(req: Request, res: Response) {
  const id = Number(req.params.id);
  const agendamento = await cancelarAgendamentoService(id);
  res.json({
    message: `Agendamento ${req.params.id} cancelado com sucesso`,
    agendamento
  });
}
