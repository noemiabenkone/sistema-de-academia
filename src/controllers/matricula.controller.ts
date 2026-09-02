import { Request, Response } from "express";

export function listarMatriculas(req: Request, res: Response) {
  res.json({
    message: "Lista de matrículas",
  });
}

export function buscarMatricula(req: Request, res: Response) {
  res.json({
    message: `Matrícula ${req.params.id} encontrada`,
  });
}

export function criarMatricula(req: Request, res: Response) {
  res.json({
    message: "Matrícula criada com sucesso",
  });
}

export function atualizarMatricula(req: Request, res: Response) {
  res.json({
    message: `Matrícula ${req.params.id} atualizada com sucesso`,
  });
}

export function cancelarMatricula(req: Request, res: Response) {
  res.json({
    message: `Matrícula ${req.params.id} cancelada com sucesso`,
  });
}
