import {Request, Response} from 'express';
import { criarProfessor as criarProfessorService } from '../services/professor.service.js';
import { atualizarProfessor as atualizarProfessorService } from '../services/professor.service.js';
import { desativarProfessor as desativarProfessorService } from '../services/professor.service.js';
import { consultarProfessor as consultarProfessorService } from '../services/professor.service.js';
import { listarProfessores as listarProfessoresService } from '../services/professor.service.js';

export async function criarProfessor(req: Request, res: Response) {
   try{
    const professor = await criarProfessorService(req.body);
    res.status(201).json({
        message: 'Professor criado com sucesso',
        data: professor
    })
   } catch (error) {
    res.status(500).json({
        message: 'Erro ao criar professor'
    })
   }
}

export async function atualizarProfessor(req: Request, res: Response) {
   try{
    const professor = await atualizarProfessorService(Number(req.params.id), req.body);
    res.status(200).json({
        message: `Professor ${req.params.id} atualizado com sucesso`,
        data: professor
    })
   } catch (error) {
    res.status(500).json({
        message: 'Erro ao atualizar professor'
    })
   }
}

export async function desativarProfessor(req: Request, res: Response) {
    const professor = await desativarProfessorService(Number(req.params.id));
    res.status(200).json({
        message: `Professor ${req.params.id} desativado com sucesso`,
        data: professor
    })
}

export async function consultarProfessor(req: Request, res: Response) {
    const professor = await consultarProfessorService(Number(req.params.id));
    res.status(200).json({
        message: `Professor ${req.params.id} encontrado`,
        data: professor
    })
}

export async function listarProfessores(req: Request, res: Response) {
    const professores = await listarProfessoresService();
    res.status(200).json({
        message: 'Lista de professores',
        data: professores
    })
}