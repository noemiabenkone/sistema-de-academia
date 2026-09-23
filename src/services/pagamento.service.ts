import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PagamentoInput } from "../schemas/pagamento.schema.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function registrarPagamento(pagamentoData: PagamentoInput) {
 const matriculaId = pagamentoData.matriculaId;
  const valor = pagamentoData.valor;
  const dataPagamento = new Date();
  const dataVencimento = new Date(dataPagamento);
dataVencimento.setMonth(dataVencimento.getMonth() + 1);
  

  const matricula = await prisma.matricula.findUnique({
    where: { id: matriculaId }
  });

  if (!matricula) {
  throw new Error("Matrícula não encontrada");
}

  
  return prisma.pagamento.create({
    data: {
      matriculaId,
      valor,
      dataPagamento,
      dataVencimento,
      status: 'PAGO'
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