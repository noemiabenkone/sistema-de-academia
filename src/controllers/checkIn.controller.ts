import { Request, Response } from "express";

export function listarCheckIns(req: Request, res: Response) {
  res.json({
    message: "Lista de check-ins",
  });
}

export function buscarCheckIn(req: Request, res: Response) {
  res.json({
    message: `Check-in ${req.params.id} encontrado`,
  });
}

export function realizarCheckIn(req: Request, res: Response) {
  res.json({
    message: `Check-in do aluno ${req.params.id} realizado com sucesso`,
  });
}