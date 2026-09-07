import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});
export async function registrarCheckIn(checkInData: any) {
  const alunoId = checkInData.alunoId;

 const matricula = await prisma.matricula.findFirst({
  where: {
    alunoId,
    status: "ATIVA"
  },

  include: {
    pagamentos: {
      where: {
        status: {
          not: "PAGO"
        }
      },
      orderBy: {
        dataVencimento: "desc"
      },
      take: 1
    }
  }
});
  if (!matricula) {
    throw new Error("Aluno não possui matrícula ativa");
  }

  const pagamento = matricula.pagamentos[0];

 if (!pagamento) {
  return prisma.checkIn.create({
    data: {
      alunoId,
      status: "LIBERADO",
      dataCheckIn: new Date()
    }
  });
}

  const hoje = new Date();
  const vencimento = new Date(pagamento.dataVencimento);

  const diferencaEmMs = hoje.getTime() - vencimento.getTime();

  const diasDeAtraso = Math.floor(
    diferencaEmMs / (1000 * 60 * 60 * 24)
  );

  let statusCheckIn: string;

  if (diasDeAtraso <= 7) {
    statusCheckIn = "LIBERADO";
  } else {
    statusCheckIn = "BLOQUEADO";
  }

  return prisma.checkIn.create({
    data: {
      alunoId,
      status: statusCheckIn,
      dataCheckIn: new Date()
    }
  });
}

export async function listarCheckIns() {
  return prisma.checkIn.findMany();
}

export async function buscarCheckIn(checkInId: number) {
  return prisma.checkIn.findUnique({
    where: {
      id: checkInId
    }
  });
}