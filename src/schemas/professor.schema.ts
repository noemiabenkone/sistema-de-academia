import {z} from 'zod';

export const professorSchema = z.object({
    nome: z.string() .min(3),
    cpf: z.string() .min(11) . max(11),
    email: z.email()
})

export type ProfessorInput = z.infer<typeof professorSchema> 