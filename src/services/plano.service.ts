import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PlanoInput } from "../schemas/plano.schema.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function criarPlano(planoData: PlanoInput) {
  const nome = planoData.nome;
  const beneficios = planoData.beneficios;
  const preco = planoData.preco;
  const status = planoData.status;

  return prisma.plano.create({
    data: {
      nome,
      beneficios,
      preco,
      status
    },
  });
}

export async function listarPlanos() {
  return prisma.plano.findMany();
}

export async function buscarPlano(id: number) {
  return prisma.plano.findUnique({
    where: { id }
  })
}

export async function atualizarPlano(id: number, planoData: PlanoInput) {
  const nome = planoData.nome;
  const beneficios = planoData.beneficios;
  const preco = planoData.preco;
  const status = planoData.status;

  return prisma.plano.update({
    where: { id },
    data: {
      nome,
      beneficios,
      preco,
      status
    },
  });
}

export async function desativarPlano(id: number) {
  return prisma.plano.update({
    where: { id },
    data: {
      status: "inativo"
    },
  });
}