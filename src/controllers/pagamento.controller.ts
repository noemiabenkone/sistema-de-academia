import {Request, Response} from 'express';
import { registrarPagamento as registrarPagamentoService } from '../services/pagamento.service.js';
import { listarPagamentos as listarPagamentosService } from '../services/pagamento.service.js';
import { buscarPagamento as buscarPagamentoService } from '../services/pagamento.service.js';
export async function registrarPagamento(req: Request, res: Response) {
    try {
        const pagamento = await registrarPagamentoService(req.body);
        res.status(201).json({
            message: `Pagamento registrado com sucesso para o aluno `,
            data: pagamento
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao registrar pagamento'
        });
    }
}

export async function listarPagamentos(req: Request, res: Response) {
    try {
        const pagamentos = await listarPagamentosService();
        res.status(200).json({
            message: 'Lista de pagamentos',
            data: pagamentos
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao listar pagamentos'
        });
    }
}

export async function buscarPagamento(req: Request, res: Response) {
    try {
        const pagamento = await buscarPagamentoService(Number(req.params.id));
        res.status(200).json({
            message: `Pagamento ${req.params.id} encontrado`,
            data: pagamento
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao buscar pagamento'
        });
    }
}