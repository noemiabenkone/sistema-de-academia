import { z } from "zod";

export const roleSchema = z.object({
  nome: z.string(),
  status: z.string()
});

export type RoleInput = z.infer<typeof roleSchema>;


 