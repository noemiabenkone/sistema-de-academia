import { Request, Response } from "express";
import { criarPlano as criarPlanoService } from "../services/plano.service.js";
import { listarPlanos as listarPlanosService } from "../services/plano.service.js";
import { buscarPlano as buscarPlanoService } from "../services/plano.service.js";
import { atualizarPlano as atualizarPlanoService } from "../services/plano.service.js";
import { desativarPlano as desativarPlanoService } from "../services/plano.service.js";

export async function listarPlanos(req: Request, res: Response) {
  try{
    const planos = await listarPlanosService();
    res.json(planos);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao listar planos",
      error
    });
  }
}

export async function buscarPlano(req: Request, res: Response) {
  const id = Number(req.params.id);
  try{
    const plano = await buscarPlanoService(id);
    res.json(plano);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar plano",
      error
    });
  }
}

export async function criarPlano(req: Request, res: Response) {
  const planoData = req.body;
 try{
  const plano = await criarPlanoService(planoData);
  res.status(201).json({
    message: "Plano criado com sucesso",
    plano,
  });
 } catch (error) {
  res.status(500).json({
    message: "Erro ao criar plano",
    error
  });
 }
}

export async function atualizarPlano(req: Request, res: Response) {
  const id = Number(req.params.id);
  try{
    const plano = await atualizarPlanoService(id, req.body);
    res.json({
      message: `Plano ${id} atualizado com sucesso`,
      plano,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar plano",
      error
    });
  }
}

export async function desativarPlano(req: Request, res: Response) {
  const id = Number(req.params.id);
  try{
    const plano = await desativarPlanoService(id);
    res.json({
      message: `Plano ${id} desativado com sucesso`,
      plano,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao desativar plano",
      error
    });
  }
}
