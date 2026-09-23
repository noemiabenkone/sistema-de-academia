import {z} from 'zod';

export const matriculaSchema = z.object({
    status: z.string(),
    alunoId: z.number(),
    planoId: z.number()
});
export type MatriculaInput = z.infer<typeof matriculaSchema>;