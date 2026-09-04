import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function listarAlunos() {
  return await prisma.aluno.findMany();
}

export async function buscarAluno(id: number) {
  return await prisma.aluno.findUnique({
    where: {
      id
    }
  })
}

export async function criarAluno(data: any) {
 const alunoExistence = await prisma.aluno.findUnique({
  where: {
    cpf: data.cpf
  }
 })
 if (alunoExistence) {
  throw new Error(`Aluno com CPF ${data.cpf} já existe`);
 }
 return await prisma.aluno.create({
    data
 })
  
}



export async function atualizarAluno(id: number, data: any) {
  return await prisma.aluno.update({
    where: {
      id
    },
    data
  })
}

export async function desativarAluno(id: number) {
  return await prisma.aluno.update({
    where: {
      id
    },
    data: {
      ativo: false
    }
  })
}
   