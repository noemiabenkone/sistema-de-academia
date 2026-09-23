import { z } from "zod";

export const checkInSchema = z.object({
  alunoId: z.number(),
});

export type CheckInInput = z.infer<typeof checkInSchema>;


 