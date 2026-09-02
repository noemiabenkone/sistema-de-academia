import { Request, Response } from "express";

export function listarPlanos(req: Request, res: Response) {
  res.json({
    message: "Lista de planos",
  });
}

export function buscarPlano(req: Request, res: Response) {
  res.json({
    message: `Plano ${req.params.id} encontrado`,
  });
}

export function criarPlano(req: Request, res: Response) {
  res.json({
    message: "Plano criado com sucesso",
  });
}

export function atualizarPlano(req: Request, res: Response) {
  res.json({
    message: `Plano ${req.params.id} atualizado com sucesso`,
  });
}

export function desativarPlano(req: Request, res: Response) {
  res.json({
    message: `Plano ${req.params.id} desativado com sucesso`,
  });
}
