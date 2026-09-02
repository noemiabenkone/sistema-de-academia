import { Request, Response } from "express";

export function listarAlunos(req: Request, res: Response) {
  res.json({
    message: "Lista de alunos",
  });
}

export function buscarAluno(req: Request, res: Response) {
  res.json({
    message: `Aluno ${req.params.id} encontrado`,
  });
}

export function criarAluno(req: Request, res: Response) {
  res.json({
    message: "Aluno criado com sucesso",
  });
}

export function atualizarAluno(req: Request, res: Response) {
  res.json({
    message: `Aluno ${req.params.id} atualizado com sucesso`,
  });
}

export function desativarAluno(req: Request, res: Response) {
  res.json({
    message: `Aluno ${req.params.id} desativado com sucesso`,
  });
}


