import {Request, Response} from 'express';
import { professorSchema } from '../schemas/professor.schema.js';
import { 
      criarProfessor as criarProfessorService, 
      atualizarProfessor as atualizarProfessorService,
      desativarProfessor as desativarProfessorService,
      consultarProfessor as consultarProfessorService,
      listarProfessores as listarProfessoresService
    } from '../services/professor.service.js';


export async function criarProfessor(req: Request, res: Response) {
   
    const dataValidados = professorSchema.parse(req.body)
    const professor = await criarProfessorService(dataValidados);
    res.status(201).json({
        message: 'Professor criado com sucesso',
        data: professor
    })
}

export async function atualizarProfessor(req: Request, res: Response) {
   
    const dataValidados = professorSchema.parse(req.body)
    const professor = await atualizarProfessorService(Number(req.params.id), dataValidados);
    res.status(200).json({
        message: `Professor ${req.params.id} atualizado com sucesso`,
        data: professor
    })
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