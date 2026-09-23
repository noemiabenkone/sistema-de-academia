import {z} from 'zod';

export const usuarioSchema = z.object({
   nome : z.string(),
   email: z.email(),
   senha: z.string(),
   roleId: z.number()
})
export type UsuarioInput = z.infer<typeof usuarioSchema>