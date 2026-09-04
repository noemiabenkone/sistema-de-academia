import { Request, Response } from "express";
import { listarMatriculas as listarMatriculasService } from "../services/matricula.service.js";
import { buscarMatricula as buscarMatriculaService } from "../services/matricula.service.js";
import { criarMatricula as criarMatriculaService } from "../services/matricula.service.js";
import { atualizarMatricula as atualizarMatriculaService } from "../services/matricula.service.js";
import { cancelarMatricula as cancelarMatriculaService } from "../services/matricula.service.js";

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
  const matricula = await criarMatriculaService(req.body);
  res.json(matricula);
}

export async function atualizarMatricula(req: Request, res: Response) {
  const id = Number(req.params.id);
  const matricula = await atualizarMatriculaService(id, req.body);
  res.json(matricula);
}

export async function cancelarMatricula(req: Request, res: Response) {
  const id = Number(req.params.id);
  const matricula = await cancelarMatriculaService(id);
  res.json({
    message: `Matrícula ${req.params.id} cancelada com sucesso`,
  });
}
