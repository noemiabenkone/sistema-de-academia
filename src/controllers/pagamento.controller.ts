import {Request, Response} from 'express';
import {
  buscarPagamento as buscarPagamentoService,
  listarPagamentos as listarPagamentosService, 
  registrarPagamento as registrarPagamentoService } 
from '../services/pagamento.service.js';
import { pagamentoSchema } from '../schemas/pagamento.schema.js';

export async function registrarPagamento(req: Request, res: Response) {
    const dadosValidados = pagamentoSchema.parse(req.body)
    const pagamento = await registrarPagamentoService(dadosValidados);
    res.status(201).json({
      message: `Pagamento registrado com sucesso para o aluno `,
      data: pagamento
    });
}

export async function listarPagamentos(req: Request, res: Response) {
    const pagamentos = await listarPagamentosService();
    res.status(200).json({
      message: 'Lista de pagamentos',
      data: pagamentos
    });
}

export async function buscarPagamento(req: Request, res: Response) {
    const pagamento = await buscarPagamentoService(Number(req.params.id));
    res.status(200).json({
      message: `Pagamento ${req.params.id} encontrado`,
      data: pagamento
    });
}