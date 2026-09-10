import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
export async function criarRole(nome: string) {
  const role = await prisma.role.create({
    data: {
      nome,
    },
  });
  return role;
}
export async function atualizarRole(id: number, nome: string) {
  const role = await prisma.role.update({
    where: {
      id,
    },
    data: {
      nome,
    },
  });
  return role;
}
export async function desativarRole(id: number) {
  const role = await prisma.role.update({
    where: {
      id,
    },
    data: {
      ativo: false,
    },
  });
  return role;
}
export async function listarRoles() {
  const roles = await prisma.role.findMany();
  return roles;
}
export async function buscarRole(id: number) {
  const role = await prisma.role.findUnique({
    where: {
      id,
    },
  });
  return role;
}