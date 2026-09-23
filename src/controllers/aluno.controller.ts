import { Request, Response } from "express";
import { alunoSchema } from "../schemas/aluno.schema.js";
import {
  listarAlunos as listarAlunosService,
  buscarAluno as buscarAlunoService,
  criarAluno as criarAlunoService,
  atualizarAluno as atualizarAlunoService,
  desativarAluno as desativarAlunoService,} 
from "../services/aluno.service.js";

export async function listarAlunos(req: Request, res: Response) {
  const alunos = await listarAlunosService();
  res.json({
    message: "Lista de alunos",
    data: alunos
  });
}

export async function buscarAluno(req: Request, res: Response) {
  const id = Number (req.params.id);
  const aluno = await buscarAlunoService(id);
  res.json({
    message: `Aluno ${id} encontrado`,
    data: aluno
  });
}

export async function criarAluno(req: Request, res: Response) {
  const dadosValidados = alunoSchema.parse(req.body);
  const aluno = await criarAlunoService(dadosValidados);
  res.json({
    message: "Aluno criado com sucesso",
    data: aluno
  });
}

export async function atualizarAluno(req: Request, res: Response) {
  const id = Number(req.params.id);
  const dadosValidados = alunoSchema.parse(req.body)
  const aluno = await atualizarAlunoService(id, dadosValidados);
  res.json({
    message: `Aluno ${id} atualizado com sucesso`,
    data: aluno
  });
}

export async function desativarAluno(req: Request, res: Response) {
  const id = Number(req.params.id);
  const aluno = await desativarAlunoService(id);
  res.json({
    message: `Aluno ${id} desativado com sucesso`,
    data: aluno
  });
}


