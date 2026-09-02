import {Request, Response} from 'express';

export function registrarPagamento(req: Request, res: Response) {
    res.json({
        message: `Pagamento registrado com sucesso para o aluno ${req.params.id}`,
    })
}

export function listarPagamentos(req: Request, res: Response) {
    res.json({
        message: 'Lista de pagamentos'
    })
}

export function buscarPagamento(req: Request, res: Response) {
    res.json({
        message: `Pagamento ${req.params.id} encontrado`
    })
}