import {z} from 'zod';

export const planoSchema = z.object({
    nome: z.string() .min(3),
    preco: z.number() .positive(),
    beneficios: z.string() .min(3),
    status: z.string()
})
export type PlanoInput =  z.infer<typeof planoSchema>