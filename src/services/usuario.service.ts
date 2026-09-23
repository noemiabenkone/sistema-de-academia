import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { UsuarioInput } from "../schemas/usuario.schema.js";
import { AppError } from "../errors/AppError.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function criarUsuario(data: UsuarioInput) {
  const usuarioExistence = await prisma.usuario.findUnique({
  where: {
    email: data.email
  }
 })
 if (usuarioExistence) {
  throw new AppError(
    `Usuário com email ${data.email} já existe`,
    409
  );
}
 return await prisma.usuario.create({
    data
 })
}

export async function buscarUsuario(id: number) {
  const usuario = await prisma.usuario.findUnique({
    where: {
      id,
    },
  });
  return usuario;
}

export async function atualizarUsuario(id: number, data: UsuarioInput) {
  const usuario = await prisma.usuario.update({
    where: { id },
    data
  });

  return usuario;
}

export async function desativarUsuario(id: number) {
  const usuario = await prisma.usuario.update({
    where: {
      id,
    },
    data: {
      ativo: false,
    },
  });
  return usuario;
}

export async function listarUsuarios() {
  const usuarios = await prisma.usuario.findMany();
  return usuarios;
}