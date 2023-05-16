import {z} from "zod"

export const productSchema = z.object({
    title: z.string().min(3, "O campo title deve ter no minimo 3 caracteres").max(255, "O campo title deve ter no máximo 255 caracteres"),
    price: z.number().min(0, "O campo price deve ser maior que 0"),
    description: z.string().min(3, "O campo description deve ter no minimo 3 caracteres").max(255, "O campo description deve ter no máximo 255 caracteres")
})

export type Product = z.infer<typeof productSchema>

