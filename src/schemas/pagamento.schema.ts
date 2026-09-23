import { z } from "zod";

export const pagamentoSchema = z.object({
  matriculaId: z.number().int().positive(),
  valor: z.number(),
});

export type PagamentoInput = z.infer<typeof pagamentoSchema>;