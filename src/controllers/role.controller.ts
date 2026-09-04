import { Request, Response } from "express";

export  function listarRoles(req: Request, res: Response) {
  res.json({
    message: "Lista de roles",
  });
}

export function buscarRole(req: Request, res: Response) {
  res.json({
    message: `Role ${req.params.id} encontrada`,
  });
}

export function criarRole(req: Request, res: Response) {
  res.json({
    message: "Role criada com sucesso",
  });
}

export function atualizarRole(req: Request, res: Response) {
  res.json({
    message: `Role ${req.params.id} atualizada com sucesso`,
  });
}

export function desativarRole(req: Request, res: Response) {
  res.json({
    message: `Role ${req.params.id} desativada com sucesso`,
  });
}