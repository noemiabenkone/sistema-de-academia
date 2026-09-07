import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function registrarPagamento(pagamentoData: any) {
 const matriculaId = pagamentoData.matriculaId;
  const valor = pagamentoData.valor;
  const dataPagamento = pagamentoData.dataPagamento;
  const dataVencimento = pagamentoData.dataVencimento;
  const status = pagamentoData.status;

  return prisma.pagamento.create({
    data: {
      matriculaId,
      valor,
      dataPagamento,
      dataVencimento,
      status
    },
  });
}

export async function listarPagamentos() {
  return prisma.pagamento.findMany();
}

export async function buscarPagamento(id: number) {
  return prisma.pagamento.findUnique({
    where: { id },
  })
}