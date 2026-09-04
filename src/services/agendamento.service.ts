import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
export async function listarAgendamentos() {
    return await prisma.agendamento.findMany();
}

export async function buscarAgendamento(id: number) {
    return await prisma.agendamento.findUnique({
        where: {
            id: id
        }
    })
}

export async function criarAgendamento(agendamentoData: any) {
    const agendamentoAluno = await prisma.agendamento.findFirst({
        where: {
            alunoId: agendamentoData.alunoId,
            dataHora: agendamentoData.dataHora,
            status: "ATIVA"
        }
    })
    
    if (agendamentoAluno) {
        throw new Error("Aluno já possui um agendamento ativo neste horário");
    }

    const agendamentoProfessor = await prisma.agendamento.findFirst({
        where: {
            professorId: agendamentoData.professorId,
            dataHora: agendamentoData.dataHora,
            status: "ATIVA"
        }
    })
    
    if (agendamentoProfessor) {
        throw new Error("Professor já possui um agendamento ativo neste horário");
    }

    const agendamento = await prisma.agendamento.create({
        data: {
            alunoId: agendamentoData.alunoId,
            professorId: agendamentoData.professorId,
            dataHora: agendamentoData.dataHora,
            status: "ATIVA",
        }
    })

    return agendamento;
}

export async function atualizarAgendamento(id: number, agendamentoData: any) {
    return await prisma.agendamento.update({
        where: {
            id: id
        },
        data: agendamentoData
    })
}

export async function cancelarAgendamento(id: number) {
    return await prisma.agendamento.update({
        where: {
            id: id
        },
        data: {
            status: "CANCELADA"
        }
    })
}