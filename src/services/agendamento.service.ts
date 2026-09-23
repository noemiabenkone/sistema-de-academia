import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { AgendamentoInput } from "../schemas/agendamento.schema.js";

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

export async function criarAgendamento(agendamentoData: AgendamentoInput) {
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

export async function atualizarAgendamento(
  id: number,
  agendamentoData: AgendamentoInput
) {
  const agendamentoAtual = await prisma.agendamento.findUnique({
    where: { id }
  });
  if (!agendamentoAtual) {
    throw new Error("Agendamento não encontrado");
  }
  const conflitoAluno = await prisma.agendamento.findFirst({
  where: {
    alunoId: agendamentoData.alunoId,
    dataHora: agendamentoData.dataHora,
    status: "ATIVA",
    id: { not: id }
    }
  });
  if (conflitoAluno) {
  throw new Error("Aluno já possui um agendamento ativo neste horário");
  }

  const conflitoProfessor = await prisma.agendamento.findFirst({
  where: {
    professorId: agendamentoData.professorId,
    dataHora: agendamentoData.dataHora,
    status: "ATIVA",
    id: { not: id }
  }
  });

  if (conflitoProfessor) {
  throw new Error("o Professor já possui um agendamento ativo neste horário");
 }
  
 return await prisma.agendamento.update({
  where: { id },
  data: {
    alunoId: agendamentoData.alunoId,
    professorId: agendamentoData.professorId,
    dataHora: agendamentoData.dataHora
  }
 });
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