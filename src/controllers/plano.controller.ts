import { Request, Response } from "express";
import { 
  criarPlano as criarPlanoService,
  listarPlanos as listarPlanosService,
  buscarPlano as buscarPlanoService,
  atualizarPlano as atualizarPlanoService,
  desativarPlano as desativarPlanoService
}from "../services/plano.service.js";
import { planoSchema } from "../schemas/plano.schema.js";

export async function listarPlanos(req: Request, res: Response) {
  const planos = await listarPlanosService();
  res.json(planos);
}

export async function buscarPlano(req: Request, res: Response) {
  const id = Number(req.params.id);
  const plano = await buscarPlanoService(id);
  res.json(plano);
}

export async function criarPlano(req: Request, res: Response) {
  const dadosValidados = planoSchema.parse(req.body)
  const plano = await criarPlanoService(dadosValidados);
  res.status(201).json({
    message: "Plano criado com sucesso",
    plano,
  });
 
}

export async function atualizarPlano(req: Request, res: Response) {
  const id = Number(req.params.id);
  const dadosValidados = planoSchema.parse(req.body)
  const plano = await atualizarPlanoService(id, dadosValidados);
  res.json({
    message: `Plano ${id} atualizado com sucesso`,
    plano,
  });
}

export async function desativarPlano(req: Request, res: Response) {
  const id = Number(req.params.id);
  const plano = await desativarPlanoService(id);
  res.json({
    message: `Plano ${id} desativado com sucesso`,
    plano,
  });
}
