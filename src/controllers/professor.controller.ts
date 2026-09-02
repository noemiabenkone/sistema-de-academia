import {Request, Response} from 'express';

export function criarProfessor(req: Request, res: Response) {
    res.json({
        message: 'Professor criado com sucesso'
    })
}

export function atualizarProfessor(req: Request, res: Response) {
    res.json({
        message: `Professor ${req.params.id} atualizado com sucesso`
    })
}

export function desativarProfessor(req: Request, res: Response) {
    res.json({
        message: `Professor ${req.params.id} desativado com sucesso`
    })
}

export function consultarProfessor(req: Request, res: Response) {
    res.json({
        message: `Professor ${req.params.id} encontrado`
    })
}

export function listarProfessores(req: Request, res: Response) {
    res.json({
        message: 'Lista de professores'
    })
}