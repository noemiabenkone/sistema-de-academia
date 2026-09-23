import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { ProfessorInput } from "../schemas/professor.schema.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function criarProfessor(data: ProfessorInput) {
  const professor = await prisma.professor.create({
    data
  })
  return professor
}
export async function atualizarProfessor(id: number, data: ProfessorInput) {
  const professor = await prisma.professor.update({
    where: { id },
    data
  })
  return professor
}
export async function desativarProfessor(id: number) {
  const professor = await prisma.professor.update({
    where: { id },
    data: { ativo: false }
  })
  return professor
}
export async function consultarProfessor(id: number) {
  const professor = await prisma.professor.findUnique({
    where: { id }
  })
  return professor
}
export async function listarProfessores() {
  const professores = await prisma.professor.findMany()
  return professores
}
