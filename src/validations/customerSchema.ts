import {z} from "zod"

export const customerSchema = z.object({
    name: z.string().min(3, "O campo name deve ter no minimo 3 caracteres").max(255, "O campo name deve ter no máximo 255 caracteres"),
    email: z.string().email(),
    password: z.string().min(6, "O campo password deve ter no minimo 6  caracteres.").max(255),
})

export type Customer = z.infer<typeof customerSchema>
