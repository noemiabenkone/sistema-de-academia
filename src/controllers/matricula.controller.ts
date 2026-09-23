import { Request, Response } from "express";
import { matriculaSchema } from "../schemas/matricula.schema.js";
import { 
  cancelarMatricula as cancelarMatriculaService, 
  atualizarMatricula as atualizarMatriculaService, 
  listarMatriculas as listarMatriculasService,
  buscarMatricula as buscarMatriculaService,
  criarMatricula as criarMatriculaService }
from "../services/matricula.service.js";

export async function listarMatriculas(req: Request, res: Response) {
  const matriculas = await listarMatriculasService();
  res.json(matriculas);
}

export async function buscarMatricula(req: Request, res: Response) {
  const id = Number(req.params.id);
  const matricula = await buscarMatriculaService(id);
  res.json(matricula);
}

export async function criarMatricula(req: Request, res: Response) {
  const dadosValidados = matriculaSchema.parse(req.body)
  const matricula = await criarMatriculaService(dadosValidados);
  res.json(matricula);
}

export async function atualizarMatricula(req: Request, res: Response) {
  const id = Number(req.params.id);
  const dadosValidados = matriculaSchema.parse(req.body)
  const matricula = await atualizarMatriculaService(id, dadosValidados);
  res.json(matricula);
}

export async function cancelarMatricula(req: Request, res: Response) {
  const id = Number(req.params.id);
  const matricula = await cancelarMatriculaService(id);
  res.json({
    message: `Matrícula ${req.params.id} cancelada com sucesso`,
    data: matricula
  });
}
