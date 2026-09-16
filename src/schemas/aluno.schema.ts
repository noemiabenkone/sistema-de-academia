import { z } from "zod";

export const alunoSchema = z.object({
  nome: z.string().min(3),
  cpf: z.string().min(11).max(11),
  email: z.email(),
  telefone: z.string().optional(),
  dataNascimento: z.coerce.date(),
});

export type AlunoInput = z.infer<typeof alunoSchema>;


 