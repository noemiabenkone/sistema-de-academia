import { Request, Response } from "express";
import { listarAlunos as listarAlunosService } from "../services/aluno.service.js";

export function listarAlunos(req: Request, res: Response) {
    const alunos = listarAlunosService();
    res.json({
        message: "Lista de alunos",
        data: alunos
    });
}

export function buscarAluno(req: Request, res: Response) {
    res.json({
        message: `Aluno ${req.params.id} encontrado`
    });
}

export function criarAluno(req: Request, res: Response) {
    res.json({
        message: "Aluno criado com sucesso"
    });
}

export function atualizarAluno(req: Request, res: Response) {
    res.json({
        message: `Aluno ${req.params.id} atualizado com sucesso`
    });
}

export function deletarAluno(req: Request, res: Response) {
    res.json({
        message: `Aluno ${req.params.id} deletado com sucesso`
    });
}