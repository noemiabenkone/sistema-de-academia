import { z } from "zod";

export const agendamentoSchema = z.object({
  alunoId: z.number(),
  professorId: z.number(),
  dataHora: z.coerce.date(),

});

export type AgendamentoInput = z.infer<typeof agendamentoSchema>;