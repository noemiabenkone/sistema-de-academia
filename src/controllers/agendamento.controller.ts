import { Request, Response } from "express";

export function listarAgendamentos(req: Request, res: Response) {
  res.json({
    message: "Lista de agendamentos",
  });
}

export function consultarAgendamento(req: Request, res: Response) {
  res.json({
    message: `Agendamento ${req.params.id} encontrado`,
  });
}

export function criarAgendamento(req: Request, res: Response) {
  res.json({
    message: "Agendamento criado com sucesso",
  });
}

export function atualizarAgendamento(req: Request, res: Response) {
  res.json({
    message: `Agendamento ${req.params.id} atualizado com sucesso`,
  });
}

export function cancelarAgendamento(req: Request, res: Response) {
  res.json({
    message: `Agendamento ${req.params.id} cancelado com sucesso`,
  });
}
