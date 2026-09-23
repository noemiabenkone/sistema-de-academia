import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { MatriculaInput } from "../schemas/matricula.schema.js";
import { AppError } from "../errors/AppError.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
})

export async function listarMatriculas() {
    return await prisma.matricula.findMany();
}

export async function buscarMatricula(id: number) {
    return await prisma.matricula.findUnique({
        where: {
            id: id
        }
    })
}

export async function criarMatricula(matriculaData: MatriculaInput) {
    const matriculaAtiva = await prisma.matricula.findFirst({
        where: {
            alunoId: matriculaData.alunoId,
            status: "ATIVA"
        }
    })
    
    if (matriculaAtiva) {
    throw new AppError(
        "Aluno já possui uma matrícula ativa",
        409
    );
}

    const matricula = await prisma.matricula.create({
        data: {
            alunoId: matriculaData.alunoId,
            planoId: matriculaData.planoId,
            status: matriculaData.status
        }
    })

    return matricula;
}

export async function atualizarMatricula(id: number, matriculaData: MatriculaInput) {
    return await prisma.matricula.update({
        where: {
            id: id
        },
        data: matriculaData
    })
}

export async function cancelarMatricula(id: number) {
    return await prisma.matricula.update({
        where: {
            id: id
        },
        data: {
            status: "CANCELADA"
        }
    })
}